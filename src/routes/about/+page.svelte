<script>
  // Team members data
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Club Lead',
      image: '/images/team/team-member-1.png',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Priya Patel',
      role: 'Technical Lead',
      image: '/images/team/team-member-2.png',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Arun Kumar',
      role: 'Event Coordinator',
      image: '/images/team/team-member-3.png',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Divya Menon',
      role: 'Content Creator',
      image: '/images/team/team-member-4.png',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  ];
</script>

<svelte:head>
  <title>About | FOSS Stories</title>
  <meta name="description" content="Learn about the FOSS Club at GEC Palakkad" />
</svelte:head>

<div class="max-w-6xl mx-auto">
  <!-- Hero Section -->
  <section class="mb-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">About FOSS Club GEC Palakkad</h1>
    <div class="bg-bg-1 border border-gray-200 rounded-lg p-8">
      <p class="text-lg mb-6">
        The Free and Open Source Software (FOSS) Club at Government Engineering College, Palakkad is a student-run community dedicated to promoting open source culture and technology among students.
      </p>
      <p class="text-lg mb-6">
        Founded in 2022, our club has been actively organizing workshops, hackathons, and meetups to help students learn about open source technologies, contribute to open source projects, and build a strong technical community within the campus.
      </p>
      <p class="text-lg">
        We believe in the power of collaboration, knowledge sharing, and the open source philosophy. Our mission is to empower students with the skills and mindset needed to thrive in the world of open source software development.
      </p>
    </div>
  </section>
  
  <!-- Mission & Vision Section -->
  <section class="mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-bg-1 border border-gray-200 rounded-lg p-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Our Mission
        </h2>
        <p class="text-lg">
          To foster a vibrant open source community at GEC Palakkad by organizing hands-on workshops, collaborative projects, and networking events that empower students to become active contributors to the global open source ecosystem.
        </p>
      </div>
      
      <div class="bg-bg-1 border border-gray-200 rounded-lg p-8">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-2 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Our Vision
        </h2>
        <p class="text-lg">
          To create a generation of students who understand, embrace, and contribute to open source technologies, making GEC Palakkad a recognized hub for open source innovation and talent in India.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Team Section -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold mb-8">Our Team</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each teamMembers as member}
        <div class="bg-bg-1 border border-gray-200 rounded-lg overflow-hidden">
          <div class="aspect-square bg-gray-100">
            <img 
              src={member.image} 
              alt={member.name}
              class="w-full h-full object-cover"
              onerror={() => this.src='/images/team/team-member-1.png'}
            />
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold">{member.name}</h3>
            <p class="text-gray-600 mb-4">{member.role}</p>
            <div class="flex space-x-3">
              <a href={member.github} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-theme-1">
                <span class="sr-only">GitHub</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-theme-1">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Contact Section -->
  <section class="mb-16">
    <h2 class="text-2xl font-bold mb-8">Get in Touch</h2>
    
    <div class="bg-bg-1 border border-gray-200 rounded-lg p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Information</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-1 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>fossclub@gecpkd.ac.in</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-theme-1 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p>Government Engineering College</p>
                <p>Sreekrishnapuram, Palakkad</p>
                <p>Kerala, India - 678633</p>
              </div>
            </li>
          </ul>
          
          <div class="mt-8">
            <h3 class="text-xl font-bold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="https://github.com/fossclubgecpkd" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-theme-1">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/fossclubgecpkd" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-theme-1">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.instagram.com/fossclubgecpkd" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-theme-1">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Join Us</h3>
          <p class="mb-6">
            Interested in joining the FOSS Club? We're always looking for enthusiastic students who are passionate about open source.
          </p>
          <div class="bg-theme-1 bg-opacity-10 p-6 rounded-lg">
            <h4 class="font-bold text-lg mb-2">Membership Benefits</h4>
            <ul class="list-disc list-inside space-y-2">
              <li>Learn from experienced mentors</li>
              <li>Collaborate on real-world projects</li>
              <li>Network with industry professionals</li>
              <li>Enhance your technical and soft skills</li>
              <li>Get exclusive access to workshops and events</li>
            </ul>
            <div class="mt-6">
              <a 
                href="mailto:fossclub@gecpkd.ac.in?subject=Membership%20Inquiry" 
                class="inline-block px-6 py-3 bg-theme-1 text-white rounded-md hover:bg-opacity-90 transition-all"
              >
                Contact Us to Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
