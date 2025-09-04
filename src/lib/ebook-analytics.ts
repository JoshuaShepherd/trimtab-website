// Analytics and tracking for Tim's Ebook System
// This integrates with Google Analytics, Mailchimp, and other services

interface AnalyticsEvent {
  event: string;
  properties: Record<string, unknown>;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
}

class EbookAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.loadUserId();
  }

  private generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  private loadUserId(): void {
    // In a real app, this would load from localStorage or auth system
    this.userId = localStorage.getItem('ebook_user_id') || undefined;
  }

  // Core tracking methods
  track(event: string, properties: Record<string, unknown> = {}): void {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      },
      timestamp: new Date(),
      userId: this.userId,
      sessionId: this.sessionId
    };

    this.events.push(analyticsEvent);
    
    // Send to analytics services
    this.sendToServices(analyticsEvent);
    
    console.log('Analytics Event:', analyticsEvent);
  }

  // WebBook specific events
  trackChapterViewed(chapter: number, duration?: number): void {
    this.track('chapter_viewed', {
      chapter,
      duration_seconds: duration,
      reading_progress: this.calculateReadingProgress(chapter)
    });
  }

  trackQuizCompleted(chapter: number, score: number, totalQuestions: number): void {
    this.track('quiz_completed', {
      chapter,
      score_percentage: score,
      total_questions: totalQuestions,
      passed: score >= 70
    });
  }

  trackNoteCreated(chapter: number, noteLength: number): void {
    this.track('note_created', {
      chapter,
      note_length: noteLength,
      engagement_level: this.calculateEngagementLevel(noteLength)
    });
  }

  trackAIQuery(chapter: number, query: string, responseLength: number): void {
    this.track('ai_query', {
      chapter,
      query_type: this.classifyQuery(query),
      query_length: query.length,
      response_length: responseLength,
      context_aware: true
    });
  }

  trackCTAClicked(ctaType: string, location: string, chapter?: number): void {
    this.track('cta_clicked', {
      cta_type: ctaType,
      location,
      chapter,
      funnel_stage: this.determineFunnelStage()
    });
  }

  trackProgressMilestone(milestone: string, chapter: number, overallProgress: number): void {
    this.track('progress_milestone', {
      milestone,
      chapter,
      overall_progress: overallProgress,
      engagement_score: this.calculateEngagementScore()
    });
  }

  trackHighlightCreated(chapter: number, textLength: number): void {
    this.track('highlight_created', {
      chapter,
      text_length: textLength,
      highlight_count: this.getHighlightCount(chapter)
    });
  }

  trackVideoWatched(videoId: string, duration: number, completed: boolean): void {
    this.track('video_watched', {
      video_id: videoId,
      watch_duration: duration,
      completed,
      engagement_rate: completed ? 100 : (duration / this.getVideoLength(videoId)) * 100
    });
  }

  // Funnel specific events
  trackEmailCaptured(source: string, sku: string): void {
    this.track('email_captured', {
      source,
      sku,
      funnel_entry: 'lead_magnet',
      conversion_context: source
    });
  }

  trackTripwireViewed(timeOnPage: number): void {
    this.track('tripwire_viewed', {
      time_on_page: timeOnPage,
      price: 9,
      original_price: 19,
      discount_percentage: 53
    });
  }

  trackUpsellPresented(fromSku: string, toSku: string, timing: number): void {
    this.track('upsell_presented', {
      from_sku: fromSku,
      to_sku: toSku,
      timing_seconds: timing,
      upsell_type: 'one_click'
    });
  }

  trackOrderBumpShown(product: string, price: number): void {
    this.track('order_bump_shown', {
      product,
      price,
      placement: 'checkout_flow'
    });
  }

  trackCoachingScheduled(source: string, packageType: string): void {
    this.track('coaching_scheduled', {
      source,
      package_type: packageType,
      conversion_value: this.getCoachingValue(packageType),
      funnel_completion: true
    });
  }

  trackStoreClaimStarted(source: string, accessCode: string): void {
    this.track('store_claim_started', {
      store_source: source,
      has_access_code: !!accessCode,
      bridge_entry: true
    });
  }

  // Purchase and conversion tracking
  trackPurchase(sku: string, price: number, source: string): void {
    this.track('purchase', {
      sku,
      price,
      source,
      revenue: price,
      currency: 'USD',
      payment_flow: 'standard'
    });
  }

  trackSubscriptionStarted(plan: string, price: number): void {
    this.track('subscription_started', {
      plan,
      monthly_value: price,
      annual_value: price * 12,
      ltv_estimate: price * 24
    });
  }

  // User identification and segmentation
  identifyUser(userId: string, properties: Record<string, unknown> = {}): void {
    this.userId = userId;
    localStorage.setItem('ebook_user_id', userId);
    
    this.track('user_identified', {
      ...properties,
      identification_method: 'explicit'
    });
  }

  updateUserProperties(properties: Record<string, unknown>): void {
    this.track('user_properties_updated', properties);
  }

  // Helper methods
  private calculateReadingProgress(currentChapter: number): number {
    return (currentChapter / 7) * 100;
  }

  private calculateEngagementLevel(noteLength: number): string {
    if (noteLength < 20) return 'low';
    if (noteLength < 100) return 'medium';
    return 'high';
  }

  private classifyQuery(query: string): string {
    const queryLower = query.toLowerCase();
    if (queryLower.includes('summary') || queryLower.includes('summarize')) return 'summary';
    if (queryLower.includes('apply') || queryLower.includes('practice')) return 'application';
    if (queryLower.includes('concept') || queryLower.includes('key')) return 'concept';
    if (queryLower.includes('example') || queryLower.includes('illustration')) return 'example';
    return 'general';
  }

  private determineFunnelStage(): string {
    const url = window.location.href;
    if (url.includes('/skus')) return 'awareness';
    if (url.includes('/thank-you')) return 'conversion';
    if (url.includes('/webbook')) return 'engagement';
    if (url.includes('/coaching')) return 'retention';
    return 'unknown';
  }

  private calculateEngagementScore(): number {
    // Complex calculation based on various engagement metrics
    const recentEvents = this.events.filter(e => 
      Date.now() - e.timestamp.getTime() < 3600000 // Last hour
    );
    
    const weights = {
      chapter_viewed: 1,
      quiz_completed: 3,
      note_created: 2,
      ai_query: 2,
      highlight_created: 1,
      cta_clicked: 4
    };

    return recentEvents.reduce((score, event) => {
      return score + (weights[event.event as keyof typeof weights] || 0);
    }, 0);
  }

  private getHighlightCount(chapter: number): number {
    return this.events.filter(e => 
      e.event === 'highlight_created' && e.properties.chapter === chapter
    ).length;
  }

  private getVideoLength(videoId: string): number {
    // This would come from your video service
    const videoLengths: Record<string, number> = {
      'intro-1': 300,
      'concept-2': 480,
      'application-3': 420
    };
    return videoLengths[videoId] || 300;
  }

  private getCoachingValue(packageType: string): number {
    const values: Record<string, number> = {
      'debrief': 49,
      'strategy': 99,
      'intensive': 199
    };
    return values[packageType] || 49;
  }

  // Service integrations
  private async sendToServices(event: AnalyticsEvent): Promise<void> {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).gtag) {
      ((window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void)('event', event.event, {
        ...event.properties,
        user_id: event.userId,
        session_id: event.sessionId
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).fbq) {
      if (event.event === 'purchase') {
        ((window as unknown as Record<string, unknown>).fbq as (...args: unknown[]) => void)('track', 'Purchase', {
          value: event.properties.price,
          currency: 'USD'
        });
      } else {
        ((window as unknown as Record<string, unknown>).fbq as (...args: unknown[]) => void)('track', 'CustomEvent', {
          event_name: event.event,
          ...event.properties
        });
      }
    }

    // Mailchimp (for email events)
    if (event.event === 'email_captured' && typeof event.properties.email === 'string') {
      await this.addToMailchimp(event.properties.email as string, event.properties);
    }

    // Custom backend (for detailed analytics)
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }

  private async addToMailchimp(email: string, properties: Record<string, unknown>): Promise<void> {
    try {
      await fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: properties.source,
          tags: [properties.sku, properties.funnel_entry],
          merge_fields: {
            FNAME: properties.firstName || '',
            SOURCE: properties.source || '',
            SKU: properties.sku || ''
          }
        })
      });
    } catch (error) {
      console.error('Failed to add to Mailchimp:', error);
    }
  }

  // A/B testing support
  trackExperiment(experimentName: string, variant: string, properties: Record<string, unknown> = {}): void {
    this.track('experiment_exposure', {
      experiment_name: experimentName,
      variant,
      ...properties
    });
  }

  // Hot lead identification
  identifyHotLead(score: number, indicators: string[]): void {
    this.track('hot_lead_identified', {
      engagement_score: score,
      indicators,
      alert_tim: score > 80 // Send email alert to Tim for high-scoring leads
    });

    if (score > 80) {
      this.sendHotLeadAlert(score, indicators);
    }
  }

  private async sendHotLeadAlert(score: number, indicators: string[]): Promise<void> {
    try {
      await fetch('/api/alerts/hot-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: this.userId,
          sessionId: this.sessionId,
          score,
          indicators,
          timestamp: new Date().toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to send hot lead alert:', error);
    }
  }

  // Export data for analysis
  exportEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  getEngagementReport(): Record<string, unknown> {
    const events = this.events;
    const timeRange = 24 * 60 * 60 * 1000; // 24 hours
    const recentEvents = events.filter(e => Date.now() - e.timestamp.getTime() < timeRange);

    return {
      total_events: events.length,
      recent_events: recentEvents.length,
      unique_event_types: [...new Set(events.map(e => e.event))].length,
      engagement_score: this.calculateEngagementScore(),
      funnel_stage: this.determineFunnelStage(),
      session_duration: Date.now() - parseInt(this.sessionId, 36),
      most_active_chapter: this.getMostActiveChapter(),
      conversion_indicators: this.getConversionIndicators()
    };
  }

  private getMostActiveChapter(): number {
    const chapterCounts: Record<number, number> = {};
    this.events.forEach(event => {
      if (typeof event.properties.chapter === 'number') {
        chapterCounts[event.properties.chapter] = (chapterCounts[event.properties.chapter] || 0) + 1;
      }
    });
    
    return Object.entries(chapterCounts).reduce((mostActive, [chapter, count]) => {
      return count > (chapterCounts[mostActive] || 0) ? parseInt(chapter) : mostActive;
    }, 1);
  }

  private getConversionIndicators(): string[] {
    const indicators: string[] = [];
    const events = this.events;

    // High engagement indicators
    if (events.filter(e => e.event === 'quiz_completed').length >= 2) {
      indicators.push('multiple_quizzes_completed');
    }
    if (events.filter(e => e.event === 'ai_query').length >= 5) {
      indicators.push('high_ai_usage');
    }
    if (events.filter(e => e.event === 'note_created').length >= 3) {
      indicators.push('active_note_taker');
    }
    if (events.some(e => e.event === 'cta_clicked' && e.properties.cta_type === 'coaching')) {
      indicators.push('coaching_interest');
    }

    return indicators;
  }
}

// Global instance
export const ebookAnalytics = new EbookAnalytics();

// Convenience functions for components
export const track = (event: string, properties?: Record<string, unknown>) => 
  ebookAnalytics.track(event, properties);

export const identifyUser = (userId: string, properties?: Record<string, unknown>) =>
  ebookAnalytics.identifyUser(userId, properties);

// React hook for analytics
export function useEbookAnalytics() {
  return {
    track: ebookAnalytics.track.bind(ebookAnalytics),
    trackChapterViewed: ebookAnalytics.trackChapterViewed.bind(ebookAnalytics),
    trackQuizCompleted: ebookAnalytics.trackQuizCompleted.bind(ebookAnalytics),
    trackNoteCreated: ebookAnalytics.trackNoteCreated.bind(ebookAnalytics),
    trackAIQuery: ebookAnalytics.trackAIQuery.bind(ebookAnalytics),
    trackCTAClicked: ebookAnalytics.trackCTAClicked.bind(ebookAnalytics),
    identifyUser: ebookAnalytics.identifyUser.bind(ebookAnalytics),
    getEngagementReport: ebookAnalytics.getEngagementReport.bind(ebookAnalytics)
  };
}
