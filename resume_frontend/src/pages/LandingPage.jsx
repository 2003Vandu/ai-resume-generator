import React from 'react';
import { Link } from 'react-router';

const AICareerResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation */}
      <nav className="navbar bg-base-200 px-8 py-4 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">AI Resume Builder</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Features</a></li>
            <li><a>Testimonials</a></li>
            <li><a>Pricing</a></li>
            <li><Link className="btn btn-primary" to={"/generate-Resume"}>Get Started</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen {bg-gradient-to-r*/} from-primary to-secondary">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold">Create Professional Resumes with AI</h1>
            <p className="mb-8 text-xl">
              Transform your career story into a compelling resume that stands out to employers. 
              Our AI analyzes thousands of successful resumes to help you showcase your strengths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link className="btn btn-accent btn-lg" to={"/generate-Resume"}  >Create Your Resume Now</Link>
            { /* <button className="btn btn-outline btn-lg btn-light">See Examples</button> */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-base-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our AI-powered resume builder helps you create professional resumes that get noticed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="rounded-full bg-primary p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="card-title">AI-Powered Suggestions</h3>
              <p>Get intelligent recommendations to improve your resume based on your industry and experience level.</p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="rounded-full bg-primary p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="card-title">Easy Customization</h3>
              <p>Choose from multiple templates and customize every aspect of your resume with our intuitive editor.</p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="rounded-full bg-primary p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="card-title">ATS Friendly</h3>
              <p>Optimize your resume for Applicant Tracking Systems to ensure it gets seen by hiring managers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8 bg-base-200">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Create your perfect resume in just three simple steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <div className="text-6xl font-bold text-primary mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4">Describe Your Experience</h3>
              <p className="text-lg">
                Tell us about your work history, education, skills, and accomplishments. Our AI will help you articulate your experience effectively.
              </p>
            </div>
            <div className="flex-1">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://airesumebuilder.com/input</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Tell us about your work experience</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="I worked as a software developer for 3 years..."></textarea>
                    <button className="btn btn-primary mt-4">Analyze with AI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-12">
            <div className="flex-1">
              <div className="text-6xl font-bold text-primary mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4">Customize Your Design</h3>
              <p className="text-lg">
                Choose from professionally designed templates and customize the layout, colors, and sections to match your personal style.
              </p>
            </div>
            <div className="flex-1">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://airesumebuilder.com/design</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <div className="flex gap-2">
                    <div className="badge badge-primary">Modern</div>
                    <div className="badge badge-outline">Classic</div>
                    <div className="badge badge-outline">Creative</div>
                    <div className="badge badge-outline">Minimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="text-6xl font-bold text-primary mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4">Download & Apply</h3>
              <p className="text-lg">
                Download your resume in multiple formats (PDF, Word) and start applying to jobs with confidence.
              </p>
            </div>
            <div className="flex-1">
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://airesumebuilder.com/download</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  <div className="flex flex-col gap-4">
                    <button className="btn btn-outline">Download PDF</button>
                    <button className="btn btn-outline">Download Word</button>
                    <button className="btn btn-primary">Share Online</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-base-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from people who landed their dream jobs with resumes created by our AI
          </p>
        </div>
        
        <div className="carousel w-full max-w-6xl mx-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center text-center gap-4 px-16">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <p className="text-lg italic">
                "The AI suggestions helped me highlight achievements I didn't even realize were important. 
                I got interview calls from 3 out of 5 companies I applied to!"
              </p>
              <h4 className="text-xl font-bold">Sarah Johnson</h4>
              <p className="text-primary">Software Engineer at TechCorp</p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Create Your Professional Resume Today</h2>
          <p className="text-xl mb-8">
            Join thousands of users who have landed their dream jobs with AI-crafted resumes
          </p>
          <button className="btn btn-accent btn-lg">Get Started For Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Resume Building</a> 
          <a className="link link-hover">Cover Letters</a> 
          <a className="link link-hover">LinkedIn Optimization</a> 
          <a className="link link-hover">Interview Prep</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default AICareerResumeBuilder;