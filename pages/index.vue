<template>
  <div class="font-sans text-gray-900 antialiased selection:bg-primary-200 selection:text-primary-900 md:pb-0">

    <!-- MOBILE STICKY CTA (Visible only when hero is out of view) -->
    <div
      v-show="showStickyCta"
      class="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 p-4 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300"
      :class="showStickyCta ? 'translate-y-0' : 'translate-y-full'"
    >
      <div class="flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <span class="text-sm font-bold text-gray-500 uppercase tracking-wider">One-Time Payment</span>
          <span class="text-3xl font-heading font-black text-gray-900">$795</span>
        </div>
        <a href="https://book.stripe.com/6oU5kE8Fn6NnbtrfJoasg0c" target="_blank" rel="noopener noreferrer" class="flex-1 bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white font-bold py-4 rounded-lg text-sm shadow-lg shadow-primary-500/30 transition-colors text-center">
          Book Audit Now
        </a>
      </div>
    </div>

    <!-- Hero Section -->
    <section ref="heroSection" class="relative bg-dark-900 text-white pt-20 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <!-- Background Texture -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]"></div>
      
      <UiContainer class="relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Copy Side -->
          <div class="lg:col-span-7 text-center lg:text-left">
                      
            <h1 class="text-6xl sm:text-4xl md:text-6xl lg:text-[70px] text-balance font-heading font-bold mb-8 leading-[1.05] tracking-tight">
              Get The <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Brutal Truth</span> About Your LinkedIn Ads.
            </h1>
            
            <p class="text-lg sm:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span class="text-primary-200 font-bold">Get a deep-dive audit</span> from the founder of the LinkedIn Ads tool used by the world's top LinkedIn Ads pros to optimize $90M+ in annual spend.
              <br><br>
              Like agencies and contractors, I've seen more ad accounts than I can count, but unlike them, <span class="underline">I don't want your monthly retainer</span>. I'm here to give you <span class="text-primary-200 font-bold">the most objective, technical breakdown</span> of exactly where you're burning cash, and how to fix it.
            </p>

            <div class="flex flex-col gap-5 lg:justify-start">
              <a href="https://book.stripe.com/6oU5kE8Fn6NnbtrfJoasg0c" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white font-bold px-8 py-5 rounded-xl text-lg transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:-translate-y-1 text-center">
                Book My Deep-Dive Audit - $795
              </a>
              <div class="flex justify-center flex-row gap-2 text-white text-sm">
                <div class="flex items-center gap-2 justify-center lg:justify-start">
                  <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>48-Hour Turnaround</span>
                </div>
                <div class="flex items-center gap-2 justify-center lg:justify-start">
                  <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Video + Actionnable Report</span>
                </div>
                <div class="flex items-center gap-2 justify-center lg:justify-start">
                  <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>100% Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Spacer Column -->
          <div class="lg:col-span-1"></div>

          <!-- Video Side -->
          <div class="lg:col-span-4 relative lg:ml-5 mt-8 lg:mt-0">
            <div class="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-dark-800 aspect-video lg:aspect-[4/5] mx-auto max-w-sm lg:max-w-none group cursor-pointer hover:border-primary-500/50 transition-colors">
              <!-- Placeholder for video thumbnail -->
              <div class="absolute inset-0 bg-gray-800 flex items-center justify-center">
                 <img src="/Profile-Pic.jpg" alt="Charles Murillon" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                 <div class="relative z-10 w-20 h-20 bg-primary-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
                <p class="text-primary-500 font-heading font-bold text-lg">Why agencies hate this audit.</p>
                <!-- <p class="text-primary-400 text-sm font-medium">0:45 • Watch the intro</p> -->
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Authority Bar (Social Proof) -->
    <section class="bg-white py-12 md:py-16">
      <UiContainer>
        <div class="flex flex-col items-center justify-center">
          <!-- Avatar Group -->
          <div class="flex items-center -space-x-1 sm:-space-x-2 mb-4">
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/loic-centelles.jpeg" loading="lazy" alt="Loic Centelles" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Emma-Dowey.jpeg" loading="lazy" alt="Emma Dowey" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Joaquin-Martinez-Paz.png" loading="lazy" alt="Joaquin Martinez Paz" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/philip-ilic.jpeg" loading="lazy" alt="Philip Ilic" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Rob-Muldoon.jpeg" loading="lazy" alt="Rob Muldoon" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Tom-Casano.png" loading="lazy" alt="Tom Casano" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/ali.jpeg" loading="lazy" alt="Ali" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Kirill-Vdov.jpeg" loading="lazy" alt="Kirill Vdov" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/ivars.jpeg" loading="lazy" alt="Ivars" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Mony-Chhim.jpeg" loading="lazy" alt="Mony Chhim" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/Anthony-Blatner.jpeg" loading="lazy" alt="Anthony Blatner" class="w-full h-full object-cover">
            </div>
            <div class="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
              <img src="/AJ-Wilcox.jpeg" loading="lazy" alt="AJ Wilcox" class="w-full h-full object-cover">
            </div>
          </div>

          <!-- Trust Message -->
          <p class="text-center text-gray-600 text-sm font-medium">
            Trusted by 50+ industry leading campaign managers
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- NEW SECTION: The "Why" (Trust Builder) -->
    <section class="py-24 bg-white">
      <UiContainer>
        <div class="max-w-3xl mx-auto">
          <div class="flex items-start gap-3 sm:gap-6 mb-8">
            <span class="text-4xl sm:text-6xl text-primary-200 font-heading font-black">"</span>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 pt-4">
              I stopped managing ads and I can finally tell the truth.
            </h2>
          </div>
          <div class="prose prose-lg text-gray-600 leading-relaxed pl-0 md:pl-16">
            <p>
              <strong>For years, I managed millions in LinkedIn ad spend</strong>. I saw agencies charge $10,000/month just to "maintain" accounts that needed a few hours of work per month. I saw consultants recommend "scaling" just to increase their % of ad spend fees.
            </p>
            <p>
              <strong>Since then, I pivoted</strong>. I built <a href="https://capac.pro" target="_blank">CAPAC.pro</a>, a software tool now used by the world's most renouned linkedin ads experts.
            </p>
            <p class=" text-gray-600">
              Because I make my living from software, I don't need your monthly retainer to manage your account.
              This puts me in a unique position: <strong>I can audit your account with the most objective perspective out there.</strong>
            </p>
            <p class="text-sm text-gray-400 italic mt-6 border-l-2 border-gray-300 pl-4">
              <strong class="text-gray-500">Transparency:</strong> I do have an interest in you using CAPAC, but it only concerns manual bidding and is 99€/mo, vs the thousands an agency is interested in.
            </p>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- The Comparison (Agitation) -->
    <section class="py-24 bg-gray-50">
      <UiContainer>
        <div class="max-w-5xl mx-auto">
           <h2 class="text-3xl md:text-5xl font-heading font-bold text-center mb-8">
             Why you need my "Roast", not an Agency.
           </h2>
           
           <!-- Mobile: Stacked Cards -->
           <div class="md:hidden space-y-6">
             <!-- Card 1: Incentive -->
             <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-900">
               <div class="bg-gray-900 text-white px-4 py-3">
                 <h3 class="font-heading font-bold text-base">The Incentive</h3>
               </div>
               <div class="grid grid-cols-2 divide-x divide-gray-100">
                 <div class="p-4 bg-red-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">Typical Agency</p>
                   <p class="text-red-600 font-bold text-sm mb-1">Takes % of Spend</p>
                   <p class="text-xs text-gray-500">They want you to spend MORE</p>
                 </div>
                 <div class="p-4 bg-green-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">The Charles Roast</p>
                   <p class="text-green-600 font-bold text-sm mb-1">Flat One-Time Fee</p>
                   <p class="text-xs text-gray-500">I want you to spend BETTER</p>
                 </div>
               </div>
             </div>

             <!-- Card 2: Feedback Style -->
             <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-900">
               <div class="bg-gray-900 text-white px-4 py-3">
                 <h3 class="font-heading font-bold text-base">Feedback Style</h3>
               </div>
               <div class="grid grid-cols-2 divide-x divide-gray-100">
                 <div class="p-4 bg-red-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">Typical Agency</p>
                   <p class="text-red-600 font-bold text-base font-bold">"Polite" & Salesy</p>
                   <p class="text-xs text-gray-500 mt-1">Trying to get/keep the contract</p>
                 </div>
                 <div class="p-4 bg-green-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">The Charles Roast</p>
                   <p class="text-green-600 font-bold text-sm">Brutal & Objective</p>
                 </div>
               </div>
             </div>

             <!-- Card 3: Security -->
             <!-- <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-900">
               <div class="bg-gray-900 text-white px-4 py-3">
                 <h3 class="font-heading font-bold text-base">Security</h3>
               </div>
               <div class="grid grid-cols-2 divide-x divide-gray-100">
                 <div class="p-4 bg-red-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">Typical Agency</p>
                   <p class="text-red-600 font-bold text-sm">Requires Admin Access</p>
                   <p class="text-xs text-gray-500 mt-1">(Full Control)</p>
                 </div>
                 <div class="p-4 bg-green-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">The Charles Roast</p>
                   <p class="text-green-600 font-bold text-sm">Viewer Access Only</p>
                   <p class="text-xs text-gray-500 mt-1">(100% Safe)</p>
                 </div>
               </div>
             </div> -->

             <!-- Card 4: Cost -->
             <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-900">
               <div class="bg-gray-900 text-white px-4 py-3">
                 <h3 class="font-heading font-bold text-base">Cost</h3>
               </div>
               <div class="grid grid-cols-2 divide-x divide-gray-100">
                 <div class="p-4 bg-red-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">Typical Agency</p>
                   <p class="text-red-600 font-bold text-base">$3,000 - $10,000/mo retainer</p>
                 </div>
                 <div class="p-4 bg-green-50">
                   <p class="text-xs font-bold text-gray-500 uppercase mb-2">The Charles Roast</p>
                   <p class="text-green-600 font-black text-2xl">$795</p>
                   <p class="text-xs text-green-600 font-bold uppercase mt-1">One-Time Payment</p>
                 </div>
               </div>
             </div>
           </div>

           <!-- Desktop: Table -->
           <div class="hidden md:block bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
             <!-- Table Header -->
             <div class="grid grid-cols-3 bg-gray-900 text-white p-6 md:p-8 text-sm md:text-base font-bold uppercase tracking-wider">
               <div class="col-span-1">Criteria</div>
               <div class="col-span-1 text-center opacity-70">Typical Agency</div>
               <div class="col-span-1 text-center text-primary-400">The Charles Roast</div>
             </div>

             <!-- Row 1 -->
             <div class="grid grid-cols-3 p-6 md:p-8 border-b border-gray-100 items-center">
               <div class="col-span-1 font-heading font-bold text-gray-900">The Incentive</div>
               <div class="col-span-1 text-center">
                 <span class="text-red-600 font-bold block mb-1">Takes % of Spend</span>
                 <span class="text-xs text-gray-500">They want you to spend MORE</span>
               </div>
               <div class="col-span-1 text-center">
                 <span class="text-green-600 font-bold block mb-1">Flat One-Time Fee</span>
                 <span class="text-xs text-gray-500">I want you to spend BETTER</span>
               </div>
             </div>

             <!-- Row 2 -->
             <div class="grid grid-cols-3 p-6 md:p-8 border-b border-gray-100 items-center">
               <div class="col-span-1 font-heading font-bold text-gray-900">Feedback Style</div>
               <div class="col-span-1 text-center text-red-600 font-bold">
                 "Polite" & Salesy<br>
                 <span class="text-xs text-gray-500 font-normal">Trying to keep the contract</span>
               </div>
               <div class="col-span-1 text-center text-green-600 font-bold text-sm py-2 rounded-lg">
                 Brutal & Objective
               </div>
             </div>

             <!-- Row 3 -->
             <!-- <div class="grid grid-cols-3 p-6 md:p-8 border-b border-gray-100 items-center">
               <div class="col-span-1 font-heading font-bold text-gray-900">Security</div>
               <div class="col-span-1 text-center text-red-600 text-sm">
                 Requires Admin Access<br>(Full Control)
               </div>
               <div class="col-span-1 text-center text-green-600 font-bold text-sm">
                 Viewer Access Only<br>(100% Safe)
               </div>
             </div> -->

              <!-- Row 4: COST KILLER -->
             <div class="grid grid-cols-3 p-6 md:p-8 items-center">
               <div class="col-span-1 font-heading font-bold text-gray-900">Cost</div>
               <div class="col-span-1 text-center text-red-600 font-medium decoration-2">
                 $3,000 - $10,000/mo retainer
               </div>
               <div class="col-span-1 text-center">
                 <span class="block text-2xl md:text-3xl font-black text-green-600">$795</span>
                 <span class="text-xs text-gray-500 font-bold uppercase">One-Time Payment</span>
               </div>
             </div>
           </div>
        </div>
      </UiContainer>
    </section>

    <!-- The Deliverable -->
    <section class="py-24 md:py-32 bg-white">
      <UiContainer>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 text-center tracking-tight">
            What you get in <span class="text-primary-500">48 Hours</span>
          </h2>
          <p class="text-xl text-gray-900 text-center mb-8 font-light">
            You provide "Viewer" access. I provide the roadmap.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Deliverable 1 -->
            <div class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-900 hover:border-primary-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
                30-Min Video Breakdown
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                I record my screen as I dive into your campaign manager. You hear my unfiltered thoughts as I analyze your campaign structure, targeting layers, and creative fatigue.
              </p>
            </div>

            <!-- Deliverable 2 -->
            <div class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-900 hover:border-primary-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
                The "Stop Burning Cash" PDF
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm mb-4">
                A detailed, actionnable report outlining exactly what to change, continue or stop doing in your account.
              </p>
              <ul class="space-y-3 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">1.</span>
                  <span><strong>Urgent:</strong> What to change immediately to save money.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 font-bold">2.</span>
                  <span><strong>Strategy:</strong> My recommendations to better reach your objectives.</span>
                </li>
              </ul>
            </div>

            <!-- Deliverable 3 -->
            <div class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-900 hover:border-primary-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
                The Verdict
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                I will give you a definitive answer: Scale it, Fix it, or Kill it.
                If you are wasting your time on LinkedIn, I will tell you to leave.
              </p>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Pricing / Final CTA -->
    <section class="relative py-24 bg-dark-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-dark-900 to-dark-800"></div>

      <UiContainer class="relative z-10">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-3xl md:text-5xl font-heading font-bold mb-6">
              Stop guessing.<br>Start optimizing.
            </h2>
            <p class="text-white mb-8 max-w-md mx-auto md:mx-0">
              For less than the cost of one or two wasted days of ad spend, get the roadmap to fix your account.
            </p>
            <div class="space-y-2 text-sm text-white">
              <p>✓ 100% Secure (Viewer Access)</p>
              <p>✓ No Agency Upsell</p>
            </div>
          </div>

          <div class="flex-shrink-0 w-full md:w-auto bg-white text-gray-900 p-8 rounded-2xl text-center shadow-2xl">
            <p class="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">One-Time Investment</p>
            <div class="text-6xl font-heading font-black text-gray-900 mb-2">$795</div>
            <p class=" text-xs mb-8">USD / One Account</p>
            
            <a href="https://book.stripe.com/6oU5kE8Fn6NnbtrfJoasg0c" target="_blank" rel="noopener noreferrer" class="w-full bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl text-lg sm:text-xl shadow-xl transition-transform hover:scale-105 active:scale-100 mb-4 text-center block">
              Book My Audit
            </a>
            <p class="text-xs text-gray-900">Secure payment via Stripe</p>
          </div>

        </div>
      </UiContainer>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-gray-50">
      <UiContainer>
        <div class="max-w-3xl mx-auto space-y-4">
          <h2 class="text-3xl font-heading font-bold text-center mb-12">FAQ</h2>

          <!-- FAQ 1 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              @click="openFaq = openFaq === 1 ? null : 1"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 class="font-bold text-base sm:text-lg pr-4">How do I give you access?</h3>
              <svg
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === 1 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-show="openFaq === 1"
              class="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              It takes 30 seconds. In Campaign Manager, go to Settings → Manage Access → Add "Charles Murillon" as a Viewer. You do not share your password.
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              @click="openFaq = openFaq === 2 ? null : 2"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 class="font-bold text-base sm:text-lg pr-4">Will you try to sell me monthly management?</h3>
              <svg
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === 2 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-show="openFaq === 2"
              class="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              No. I run a software company (CAPAC). I do not offer agency services. This is strictly a one-time expert audit.
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              @click="openFaq = openFaq === 3 ? null : 3"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 class="font-bold text-base sm:text-lg pr-4">What if my budget is small?</h3>
              <svg
                class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === 3 }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-show="openFaq === 3"
              class="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              If you spend under $1,500/month, this might not be for you. This audit is most valuable for companies spending $3k-$100k+/month where efficiency gains pay for the audit instantly.
            </div>
          </div>

        </div>
      </UiContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
useSeo({
  title: 'The "Brutal Truth" LinkedIn Ads Audit | Charles Murillon',
  description: 'Founder of CAPAC audits your LinkedIn Ads account. No agency retainer, just objective feedback in 48 hours.',
  type: 'website',
  image: '/Profile-Pic.jpg'
})

const { addWebSiteSchema } = useStructuredData()
addWebSiteSchema()

// FAQ accordion state
const openFaq = ref<number | null>(null)

// Hero visibility tracking for sticky CTA
const heroSection = ref<HTMLElement | null>(null)
const showStickyCta = ref(false)

onMounted(() => {
  if (heroSection.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show sticky CTA when hero is NOT intersecting (out of view)
          showStickyCta.value = !entry.isIntersecting
        })
      },
      {
        // Trigger when hero is completely out of view
        threshold: 0,
        rootMargin: '0px'
      }
    )

    observer.observe(heroSection.value)

    // Cleanup observer on unmount
    onUnmounted(() => {
      observer.disconnect()
    })
  }
})
</script>