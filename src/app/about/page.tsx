import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About",
  description: "Our attorneys are highly experienced and well-versed in a variety of legal areas. Trust in our expertise to achieve the best outcome for your case.\\n\\nOdio feug"
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            "About"
          </h1>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Our attorneys are highly experienced and well-versed in a variety of legal areas. Trust in our expertise to achieve the best outcome for your case.\\n\\nOdio feugiat erat ut convallis eget ac lectus amet. Diam, volutpat eu in dui etiam nibh. Sed et feugiat pretium nec sed.\\n\\nOdio feugiat erat ut convallis eget ac lectus amet. Diam, volutpat eu in dui etiam nibh. Sed et feugiat pretium nec sed.\\n\\nOdio feugiat erat ut convallis eget ac lectus amet. Diam, volutpat eu in dui etiam nibh. Sed et feugiat pretium nec sed.\\n\\nQuam magna sit convallis ornare a libero non congue risus. Odio risus vitae, consectetur habitant lacus neque. Eget diam vestibulum fusce diam.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nWe will work with you to create a personalised plan to help you achieve your financial goals.\\n\\nOur attorneys are highly experienced and well-versed in a variety of legal areas. Trust in our expertise to achieve the best outcome for your case.\\n\\nOnline Learning Specialist\\n\\nDave Reisemer\\n\\nCurabitur scelerisque accumsan mauris in condimentum.\\n\\nCourse Facilitator\\n\\nEmily Teaches\\n\\nInterdum et malesuada fames ac ante ipsum primis in faucibus.\\n\\nVirtual Classroom\\n\\nSarah Instructor\\n\\nFusce mattis felis molestie tristique viverra.</p>
          </div>
        </div>
      </article>
    </div>
  )
}