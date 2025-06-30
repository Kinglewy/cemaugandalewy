(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);
function toggleNews(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Article data
    const articles = {
        1: {
            title: "Honoring Uganda’s Refugees on World Refugee Day",
            image: "img/kenyaprotest.jpeg",
            content: `<p><small>By Centre for Environment and Migration Assistance (CEMA) Kyenjojo, Uganda, 30th June, 2025</small></p>
<br><p>Kenya has experienced successive protest waves since 2024, driven initially by opposition to the Finance Bill 2024, which introduced taxes on essentials like bread, fuel, and mobile money. The demonstrations peaked on 25 June 2024, when thousands stormed parliament, prompting lethal police intervention that killed 19 people in Nairobi (23 nationwide) and injured over 200.  
Renewed unrest exploded in June 2025, sparked by the custodial death of teacher and blogger Albert Ojwang on 8 June. After official claims of suicide were overturned by an independent autopsy confirming assault, anger spread nationwide. Protests continued through mid June, with at least 22 casualties (injuries from rubber bullets, blunt trauma, teargas) reported.
According to The Guardian, the climax occurred on 25 June 2025, marking the anniversary of the 2024 protests. The Kenya National Commission on Human Rights (KNCHR) confirms 8 deaths by gunshot across 23 counties and over 400 injured, including protesters, police, and journalists. Other sources cite up to 16 fatalities by police action and injuries exceeding 400. Government claims included “terrorism disguised as dissent” and media coverage restrictions.
How Security Forces have responded to the Protests 
The Star reported that authorities utilized tear gas, water cannons, rubber and live bullets, and deployed plainclothes operatives (“goons”) on motorcycles. Several journalists were assaulted or briefly detained; at least one reporter was hit by teargas. Communications Authority ordered broadcasters (NTV, KTN, Citizen TV, K24) to halt live coverage; signals were cut until a High Court intervened.
How Media Covered the Protests 
Mainstream outlets like BBC, AP, Washington Post, Al Jazeera reported extensively—highlighting casualties, police violence, livestreamed shooting incidents—with early influence tempered by later blackout attempts .
Local media and press bodies (Kenya Editors’ Guild, Law Society, Media Council, KHRC) strongly condemned the blackout as unconstitutional, enabling restoration of broadcasts (https://www.citizen.digital/news/editors-guild-lsk-condemn-govt-order-to-stop-live-broadcast-of-june-25th-protests-n365222?utm). 
Social media, led by Gen Z, became the primary real-time channel. Posts went viral—some misinformation (e.g., “massacre” in Githurai) spread before being debunked by outlets like BBC. 
According to Aljazeera (https://institute.aljazeera.net/en/ajr/article/2967), traditional media has played a secondary role in fact checking but couldn’t match the immediacy of social platforms.
Media’s De Escalation Potential
Accurate, restrained reporting: In times of unrest, how the media frames events can profoundly shape public reaction. Accurate, restrained reporting refers to journalism that prioritizes truth, context, and responsibility over speed or sensationalism. In the context of Kenya’s protests, this approach is not just good practice—it’s a life-saving necessity.
When media outlets verify information before broadcasting, they help reduce the spread of rumors and disinformation, which are often rampant during fast-moving crises. For example, social media platforms were flooded with unverified images and claims—some falsely depicting massacres or doctored videos of police actions. If traditional media rush to publish such content without scrutiny, they risk fueling public fear, anger, or retaliation.
Moreover, avoiding graphic or inflammatory visuals, such as repeated footage of police shootings or bloodied bodies, is critical. While these images may be newsworthy, constant repetition can traumatize viewers, incite emotional overreactions, and contribute to a cycle of violence. Instead, broadcasters can convey the severity of events through measured language, careful framing, and contextual explanation—ensuring the audience is informed, not inflamed.
For example, showing a peaceful march followed by a verified police confrontation, and then providing commentary from human rights monitors, paints a fuller, more accurate picture than looping a violent clip without background.
Contextualization: Media coverage of protests must go beyond the surface of street clashes and headline statistics—it must delve into the “why” behind the unrest. This process of contextualization is crucial for the public, policymakers, and even security forces to understand the structural and emotional drivers of dissent. In the Kenyan protests of 2024 and 2025, that context is deep and urgent.
At the heart of the current wave of demonstrations is youth frustration, particularly among Gen Z and young millennials who make up the majority of Kenya’s population but feel economically sidelined and politically ignored. According to multiple reports (The Star, Al Jazeera Institute, Wikipedia), young people have faced high unemployment, limited access to opportunities, and systemic exclusion from decision-making. This generation, raised in the digital era, has turned to online platforms to voice its grievances when traditional institutions fall short.
A major trigger has been economic strain, particularly due to government proposals like the Finance Bill 2024, which introduced taxes on basic goods and digital services. Bread, fuel, sanitary pads, and mobile money—items essential for daily survival—were set to become more expensive. These policies were perceived as regressive and out of touch with the daily struggles of ordinary Kenyans. Many protesters labeled the measures not just unfair, but oppressive and exploitative.
Layered onto this is widespread anger over police brutality, which is not new in Kenya. Decades of documented extrajudicial killings, arbitrary detentions, and the unchecked use of force have created a toxic relationship between the state and citizens. The death of teacher and blogger Albert Ojwang in police custody in June 2025 ignited fresh outrage, particularly after an independent autopsy contradicted the official narrative of suicide. The resulting public outcry, amplified by Reddit threads, viral hashtags, and community forums, underscored a growing demand for accountability and justice.
Finally, media must highlight systemic corruption as a core grievance. Protesters argue that government spending has lacked transparency, and that new taxes seem designed to cover deficits created by mismanagement, bloated bureaucracies, and graft—not to improve public services. This sentiment is reinforced by media investigations and watchdog reports, which point to a disconnect between high-level political rhetoric and actual service delivery.
Amplifying moderate voices: One of the most critical roles the media can play during volatile political protests is amplifying moderate voices—those advocating for nonviolence, constructive dialogue, and long-term solutions. In a crisis, the loudest or most extreme voices often dominate headlines, especially when violence erupts. But this skewed amplification can deepen polarization and erode pathways to peace.
In the case of Kenya’s 2024–2025 protests, the media has a responsibility to actively seek out and elevate the voices of community leaders, peaceful protest organizers, human rights defenders, religious leaders, and opposition figures who are calling for restraint, reform, and respect for democratic processes.
For example, in the days following the deadly June 25, 2025 protests—when at least 23 people were killed according to Human Rights Watch—a number of youth-led civic organizations issued clear calls for nonviolence and accountability. Groups such as #RejectFinanceBill2024, which had spearheaded digital mobilization, urged protestors to remain peaceful and disciplined even in the face of provocation. However, these statements were often buried under coverage of tear gas, gunfire, and street chaos.
By giving airtime and column space to these civic leaders, media outlets can help reframe the narrative from one of confrontation to one of civic engagement. Interviews with organizers who explain why young people are taking to the streets—what they hope to achieve, and how they want to be heard—can counter the common portrayal of youth as “unruly mobs” or “threats to stability.”
Real time fact-checking: In the midst of fast-moving protests like those seen in Kenya in 2024–2025, misinformation spreads faster than the truth—often with dangerous consequences. A single tweet, WhatsApp voice note, or TikTok video can spark panic, retaliation, or confusion. In such moments, the role of the media in conducting real-time fact-checking becomes not just important, but potentially life-saving.
Fact-checking in real time involves quickly verifying claims, debunking falsehoods, and disseminating correct information as events unfold. This is especially critical in Kenya, where previous protests and political crises have been marred by rumors of mass killings, staged images, or faked government statements—some of which have gone viral before being corrected, often too late.
For example, after the tragic death of teacher and blogger Albert Ojwang in police custody in June 2025, conflicting narratives flooded social media. The police initially claimed he committed suicide, while local reports suggested torture. Had media outlets relied solely on official police statements without scrutiny, public trust would have eroded further. Instead, real-time updates from human rights organizations and investigative journalists provided a more balanced and transparent timeline, reducing speculation and channeling public anger into calls for legal redress instead of mob retaliation.
Highlighting accountability: In times of political unrest, the media plays a vital role not only in documenting injustice but in following up on justice. When reporters track and publicize investigations, prosecutions, and official responses—such as the six murder charges filed against police officers in the death of teacher and blogger Albert Ojwang—they demonstrate that the rule of law is still active, and that violent abuses will not go unchallenged.
This type of journalism—focused on accountability—is crucial for restoring public trust, especially in contexts like Kenya, where years of police brutality and impunity have led many citizens to believe that justice is a myth. Human Rights Watch, Article 19, and other watchdogs have long documented a troubling pattern: when police kill or brutalize citizens, investigations are delayed, buried, or quietly dropped. Protesters feel unheard, and public anger festers.
But when the media brings consistent, fact-based attention to judicial actions—or the lack thereof—it pressures institutions to act. In the case of Ojwang’s death in police custody in June 2025, initial claims by police that he had died by suicide were widely rejected by human rights organizations. An independent autopsy, covered by outlets like AP News, Al Jazeera, and grassroots platforms such as Reddit threads and citizen livestreams, revealed clear signs of blunt force trauma.
Media–security coordination: Amid Kenya’s ongoing protests, one of the most underexplored but urgently needed strategies for de-escalating violence is the coordination between media professionals and security agencies. When reporters and police operate in silos—or worse, as adversaries—the result is often chaos: journalists face harassment or injury, while law enforcement loses control over the narrative and public trust erodes. Establishing prearranged communication channels between the media and security forces can protect lives and reduce tensions.
In recent protests—particularly the deadly June 25, 2025 demonstrations—journalists were tear-gassed, beaten, and in some cases detained, even while wearing press identification. According to reports from Article 19 and the Kenya Union of Journalists (KUJ), several journalists from Nation Media Group and The Standard were assaulted while covering protests in Nairobi and Kisumu, despite clearly identifying themselves as press. Such incidents not only endanger lives but create a chilling effect, reducing transparency and allowing abuse to go unreported.
To prevent such outcomes, pre-established liaison mechanisms between media houses and security agencies like the Kenya Police Service, National Police Service Commission, and even local commanders are essential. These could take the form of:
<li>	Press-safety hotlines or WhatsApp groups monitored by designated police spokespersons;</li>
<li>	Joint briefings ahead of large protest events, clarifying restricted zones, media rights, and ground rules for engagement;</li>
<li>	Deployment of press liaisons within security operations to facilitate real-time updates and flag press presence;</li>
<li>	Training sessions for police officers on respecting freedom of the press and handling journalists professionally during crowd control.</li>
Such frameworks are not unprecedented. During Kenya’s 2013 and 2017 elections, some media–police collaboration mechanisms were piloted, though inconsistently. Countries like South Africa and Ghana have more formalized models where police-media liaison officers operate during high-risk events. Reviving and institutionalizing these models in Kenya—especially amid rising civil unrest—would be a major step forward.<br>
<br><p><strong>Risks & Recommendations</p></strong>
<li>Live, unfiltered coverage can inflame tensions or indirectly mobilize factions—as government alleged. A cautious balance protects freedom without inciting violence.</li>
<li>Censorship only fuels rumor mills and mistrust. The CA’s blackout undermined transparency and emergency medical response.</li>
<li>Media responsibility: avoid visual escalation (e.g., dramatized police images), double-check emotive content, and link scenes to verified context.</li><br>
<p><strong>Conclusion</strong></p>
The Kenyan media is pivotal—not just as chroniclers of unrest, but as planners of peace. By committing to accurate, contextual, and accountable reporting, plus proactive collaboration with civil society and security agencies, journalists can help transform confrontational protests into constructive civic engagement. In a climate where misinformation, fear, and state censorship loom large, responsible journalism is not optional—it’s essential to Kenya’s democracy and stability.
            </p>`,
            url: "https://cemauganda.org/news/articles/kenya-protest"
        },
        2: {
            title: "Resilience in Motion: Honoring Uganda’s Refugees on World Refugee Day",
            image: "img/cemajune.jpg",
            content: `<p><small>Published by Abas Ruhweza | June 20, 20255</small></p>
                  <p style="justify"><strong>Kyenjojo, Uganda</strong> — As the sun rises over the sprawling settlement of Kyaka II, one of the refugee settlements in Uganda, the sound of children’s laughter echoes through the dusty lanes. Women prepare breakfast, young men organize a community clean-up, and girls in school uniforms walk determinedly toward class. This is a scene of quiet resilience and strength—a reflection of the enduring spirit of refugees in Uganda.
On this World Refugee Day, the Centre for Environment and Migration Assistance (CEMA) joins the global community in celebrating the courage, contributions, and dreams of refugees. This year's theme, "For a World Where Refugees Are Welcomed," resonates deeply in Uganda, a country that hosts over 1.7 million refugees, primarily from South Sudan, the Democratic Republic of Congo, Burundi, and beyond.
<br><strong>Uganda: A Model for Refugee Inclusion</strong>
Unlike many countries, Uganda maintains one of the world’s most progressive refugee policies. Refugees are granted the right to work, move freely, access public services, and even receive plots of land. In return, refugee communities are helping to revitalize rural economies, enrich local cultures, and contribute to environmental sustainability.
“Uganda doesn’t just host refugees—it empowers them,” says Claire Nansubuga, CEMA’s Program Officer. “Our work is grounded in the belief that refugees are not passive recipients of aid but active agents of change.”
<br><strong>Stories of Strength: Halima's Energy Kiosk in Kyaka II</strong>
In Kyaka II settlement, 28-year-old Halima, a refugee mother of three, now owns a clean energy kiosk thanks to CEMA’s Clean Energy Entrepreneurship initiative. After attending a training in 2024, Halima launched her small business, which today supplies solar lanterns and clean cookstoves to over 60 households.
“I used to depend entirely on aid,” Halima shares. “Now I earn an income, help my neighbors, and feel proud of the woman I’ve become.”
<br><strong>From Crisis to Climate Leadership: Rwenzori Youth Rising</strong>
In Uganda’s fragile Rwenzori region, CEMA’s Youth Peace Circles and Climate Action Hubs bring together refugee and host youth to address deforestation, flooding, and ethnic tensions. The project provides training in climate resilience, digital storytelling, and conflict mediation.
For Kevin, a 19-year-old refugee from DRC, joining the Peace Circle was life-changing: “I used to feel invisible. Today, I speak in community meetings and lead climate campaigns in schools.”

<br><strong>The Path Ahead: What Refugees Need Most</strong>
Despite Uganda’s open-door policy, challenges remain—limited funding, inadequate access to education and healthcare, and growing climate threats to fragile settlements.
CEMA is calling on partners, policymakers, and global citizens to:<br>
•	Increase investment in refugee-led solutions, especially in education, livelihoods, and green energy.<br>
•	Support digital and civic tech platforms that amplify refugee voices in decision-making.<br>
•	Ensure that humanitarian aid incorporates climate resilience and gender equality.<br>
<br><strong>A Call to Action</strong>
As we commemorate World Refugee Day 2025, let us remember that behind every statistic is a name, a family, a dream. Refugees are not defined by what they have lost, but by the futures they are determined to build.
At CEMA, we stand in solidarity with refugees in Uganda and around the world—today and every day.
<br><strong>#WorldRefugeeDay | #WithRefugees | #CEMAForHope</strong>
                  </p>`,
            url: "https://cemauganda.org/news/articles/World-Refugee-Day"
        },
        3: {
            title: "Global Markets Reach Record Highs CEMA Marks World Environment Day: Empowering Displaced Communities for a greener future",
            image: "img/environment.jpg",
            content: `<p><small>5th June 2025 Kyenjojo Uganda</small></p>
                  <p>As the world comes together to commemorate World Environment Day 2025, the Centre for Environment and Migration Assistance (CEMA) reaffirms its commitment to building climate-resilient communities, especially among refugees, migrants, and host populations in Uganda’s most vulnerable regions.
This year’s theme, “Our Land. Our Future. We Are #GenerationRestoration”, is a clarion call for urgent action to reverse land degradation and strengthen environmental stewardship — values deeply embedded in CEMA’s mission.
<br><strong>Restoring Land, Reviving Livelihoods</strong>
In settlements like Kyaka II, Rwamwanja, and Kyangwali, CEMA works directly with displaced women and youth to implement clean energy solutions, regenerative agriculture, and tree planting campaigns. Through partnerships with local leaders and grassroots innovators, we support communities to reclaim degraded land, restore biodiversity, and generate sustainable livelihoods.
“Every tree planted by a refugee mother is a seed of hope — not just for the environment, but for future generations,” says Hashaka, a beneficiary of CEMA’s Clean Energy Entrepreneurship Program.
To date, CEMA-supported community green spaces and agroforestry sites have restored over 20 hectares of degraded land, created green jobs for more than 120 youth, and enhanced food security for over 500 refugee households.
Climate Justice for the Displaced
The climate crisis disproportionately affects displaced populations. Rising temperatures, erratic rainfall, and resource-based conflicts push already vulnerable communities further to the margins. CEMA’s programming integrates climate adaptation, peacebuilding, and humanitarian assistance to ensure that environmental solutions are inclusive and just.
We advocate for stronger recognition of climate-induced displacement and the need to incorporate refugee voices into climate policy dialogues — locally and globally.
<br><strong>Call to Action</strong>
This World Environment Day, CEMA invites stakeholders — governments, donors, CSOs, and individuals — to:
Invest in nature-based solutions that benefit both people and planet.
Support refugee-led climate innovations.
Amplify the voices of women and youth in environmental decision-making.
Together, we can build ecosystems of resilience and solidarity.
<br><strong>Join Us</strong>
Whether you're a volunteer, policymaker, or partner organization, there is a place for you in our movement for environmental justice and climate action. Join us this month as we launch:
Tree planting campaigns in Kyaka II and Rwamwanja,
Community dialogues on land restoration, and
Youth-led clean-up drives in urban refugee settlements.
Let’s make every action count — for the earth, for the displaced, and for our shared future.
<strong>#WorldEnvironmentDay | #GenerationRestoration | #ClimateJustice | #WithRefugees</strong>
</p>`,
            url: "https://cemauganda.org/news/articles/world+environment+day"
        },
        4: {
            title: "Congo-Kinshasa: Rwanda Receives Hundreds More Returnees from DR Congo",
            image: "img/rwanda.jpg",
            content: `<p><small>By Germain Nsanzimana 19 May 2025</small></p>
                  <p>Rwandan authorities on Monday, May 19 received a group of 796 Rwandans returning from eastern DR Congo, where they had been held hostage by the FDLR, a militia founded by remnants of the perpetrators of the 1994 Genocide against the Tutsi.
The group, mainly made up of women and children, is the second to be supported to go back to their country by the AFC/M23 rebels, who now control the eastern DR Congo provinces of North and South Kivu. The first group of 360 arrived on Saturday.
Officials supporting the repatriation process of these returnees say they were held hostage for many years, and some detained, by the DR Congo-backed FDLR genocidal militia.
Prosper Mulindwa, the Mayor of Rubavu District who welcomed the returnees at Grande Barrière Border Post on Monday morning, thanked them "for the decision to return to their country because Rwandans are treated all equally."
"Take part in national programmes," Mulindwa told the group, which was transported to the Nyarushishi Transit Canp in Rusizi District, where they will be supported to reintegrate into the community.
"The country is safe and your communities will receive you with no divisionism. And most importantly your children will go back to school after being discharged from the Nyarushishi Transit Camp. You will obtain official documents, including ID cards and any other necessary support."</p>`,
            url: "https://cemauganda.org/news/articles/rwanda-authorities"
        }
        5: {
            title: "Congo-Kinshasa: Congolese Escaping the M23 Conflict Face New Hardships in Burundi",
            image: "img/congo.jpg",
            content: `<p><small>By The New Humanitarian (Geneva) 20 MAY 2025</small></p>
                    <p style="text-align: justify; text-justify: inter-word;">Rwandan authorities on Monday, May 19 received a group of 796 Rwandans returning from eastern DR Congo, where they had been held hostage by the FDLR, a militia founded by remnants of the perpetrators of the 1994 Genocide against the Tutsi.
                        Cibitoke, Burundi — "There are children alone wandering here and there, and there are also people who are visibly psychologically affected by the crisis."
                        Newly arrived Congolese refugees in Burundi are struggling with harsh living conditions in camps and border areas, amid growing tensions with local authorities and aid groups over where they should be allowed to live and supported in the country.
                        More than 70,000 have braved dangerous border crossings in recent weeks, driven by intensifying conflict between the Rwanda-backed M23 rebel movement and the national army of the Democratic Republic of the Congo.
                        Despite the violence, interviews by The New Humanitarian show some refugees are already returning home because they are unable to afford rent in towns or cope with the dire conditions in the camps where Burundian officials are calling for them to live.
                        "Life in the camp is difficult," said one refugee, who asked not to be named because she feared reprisals from authorities. "There's mud everywhere because of the rain, and there will undoubtedly be malaria because there are ponds of water everywhere."
                        The woman said she was told to move to a camp alongside her uncle, who is living with HIV and relies on her for care. When they arrived, there were few health services available, so the pair were forced to leave for Bujumbura, the economic capital.
                        The UN's refugee agency, UNHCR, said the arrival of the refugees is the largest Burundi has faced in decades. It said it is also the first new refugee emergency unfolding since the US slashed its support for humanitarian organisations and response efforts.
                        To understand the refugees' plight and the politics shaping the response, we conducted reporting trips to border regions and towns hosting displaced people. Access to the main camp, however, was not made available.
                        Of the more than a dozen refugees who spoke to The New Humanitarian, many expressed gratitude to the Burundian government for offering them refuge, and to local communities and fellow refugee groups for their support and solidarity.
                        Still, they voiced frustration over the government's demand that they relocate from border areas to an official camp, which they say is isolated and too far from home. Most have resisted the move, but feel they are being denied aid as a result.
                        The New Humanitarian also documented instances of raids and arrests carried out by security services on Congolese refugees and migrants living in cities like Bujumbura, though it is unclear how many people this has affected.
                        Burundi is deeply entangled in the conflict in DRC, with its troops backing the national army against M23 rebels. The fighting has strained an already fraught relationship between Burundi and Rwanda, which also has thousands of troops in DRC.
                        Déo Hakizimana, president of the Independent Centre for Research and Initiatives for Dialogue, a civil society organisation focused on promoting dialogue in the region, called for a reset in Burundi's regional posture.
                        "I have a wish to express for my country by saying we are no longer pro-Rwanda or pro-DRC, we are simply a people of the Great Lakes and we offer our space so that it becomes a space for dialogue - regional or even international."
                        An "unsustainable" camp
                        The M23 rebellion began in late 2021 but this year has seen its biggest escalation, with the group seizing Bukavu and Goma, DRC's largest eastern cities. Millions have been displaced internally, and nearly 140,000 have crossed to neighbouring countries since January.
                        Though many have fled M23 forces - accused of daily killings, forced conscription, and forced labour in cities under their control - deserting Congolese soldiers and allied militias have also been implicated in widespread abuses.
                        Initially, the refugees were hosted in transit centres along the border, including schools and a stadium in Rugombo, in the northwestern Cibitoke province. When The New Humanitarian visited the area in March, refugees spoke of spreading diseases, and a lack of food and shelter.
                        In late March, the government emptied the stadium - arguing it was meant only as a transit site, and citing UN guidelines that discourage refugee settlements near borders - and encouraged more than 40,000 people inside to relocate to a formal camp.
                        Faith Kasina, a UNHCR spokesperson, said the UN agency also worked to "encourage refugees to move to safer locations away from the border where they can get further support, while waiting for the situation in the DRC to improve."
                        However, the site refugees were directed to - Musenyi camp in southeastern Burundi - had an initial capacity of just 10,000 and is built on soil with poor drainage. Shelters have already been flooded, and basic services are non-existent or overwhelmed.
                        Though many refugees resisted the move, roughly 20,000 are now living in the camp, which UNHCR has called "unsustainable" and where the medical charity Médecins Sans Frontières has declared a "humanitarian and health emergency".
                        Aid officials, speaking off the record due to the sensitivity of the subject, said the deteriorating conditions have driven some refugees to leave Musenyi and return to DRC, though they couldn't confirm how many had done so.
                        A Congolese civil servant who also works with women rights organisations in DRC, and whose name is being withheld for security reasons, said her 90-year-old father died in Musenyi because he suffered from severe prostate issues and was using a urinary catheter.
                        "Once in the camp, I think he was not able to get medical attention, and he died there," said the woman, who has remained in Cibitoke. "I learned that he was among the first arrivals to die in Musenyi. He died far away from me and his grandchildren."
                        Alain Ekyoku, a Congolese refugee and a teacher, said he visited Musenyi and found the site "overcrowded". He said he learnt of 25 people who had died in the camp since March, though The New Humanitarian could not verify those figures.
                        The woman who left Musenyi with her unwell uncle said the camp hosts many unaccompanied children, and that poor mobile network coverage makes it hard to reach anyone outside.
                        "There are children alone wandering here and there, and there are also people who are visibly psychologically affected by the crisis," she said. "They are afraid every time there is a sound similar to that of weapons."
                        In a statement last month, UNHCR said funding shortages mean it faces "critical limitations" in providing services for unaccompanied or separated children as well as survivors of gender-based violence.
                        The agency said it faces an "impossible" balancing act of running a full-scale emergency response, while simultaneously facing pressure to reduce its operations because of funding shortages.
                        "Taken by force"
                        Several refugees said they knew people who were forced to go to Musenyi under police pressure, while others described a coercive environment that led up to the closure of the stadium, including threats of repatriation from local officials.
                        Several also said they knew of friends or family members who went back to DRC because they did not want to go to the camp and could not afford rented accommodation outside the transit centres.
                        "Since pressure mounted on refugees to leave the transit centre for Musenyi, I know at least 10 who returned," said Maneno Mtumikua, a refugee and community leader in DRC. "Since the first day they returned, they didn't sleep one night because of clashes."
                        The man who is living with HIV, who also asked not to be named, said he was "taken by force" from the stadium to Musenyi, without a chance to properly explain his medical condition to local and camp authorities.
                        He said some people who resisted and tried to stay in the stadium were beaten by police, and that he was only allowed to leave Musenyi after explaining his situation and showing he had a host family willing to take him in in Bujumbura.
                        The New Humanitarian asked Kasina, the UNHCR spokesperson, why the agency encouraged refugees to go to Musenyi given the lack of capacity, and if it viewed its support for the relocation as a mistake given the reports of deaths in the camp.
                        Kasina said the move was necessary because locations close to borders are usually more exposed to security risks, and because the humanitarian services available in Musenyi were better than the stadium, where there were cases of malaria and cholera.
                        "The stadium lacked adequate sanitation, sufficient water, and hygiene facilities, contributing to poor health conditions and further risk of disease," Kasina said. "It was also urgent for the local schools where Congolese refugees were sheltering, to resume educational activities."
                        Kasina said the choice of camp was made by the government, but noted that shelter and sanitation conditions have improved, and that additional land has been allocated for a new refugee site in another province.
                        Asked about reports of forced transfers by police, Kasina said UNHCR was not aware of any such incidents. She said UNHCR's role in the relocation was focused on "ensuring the safety and protection of refugees".
                        Burundian authorities did not respond to requests for comment.
                        Economic worries
                        Refugees who resisted the move and remained in Cibitoke in rented accommodation said they are happy to be closer to home in case an opportunity to return arises, and because there are more economic opportunities there.
                        The civil servant said she is renting two houses for her family, one of which she uses as a small restaurant. She said she has also started a side business selling cooked beans, chapatis, and is learning Kirundi, the local language, to better serve her clients.
                        Mtumikua, the community leader, said he rented accommodation in Cibitoke because he wanted to continue a cross-border fuel and charcoal business he was running while in DRC.
                        Local solidarity has helped refugees, added Ekyoku, the teacher. He said a local church in Cibitoke donated food and clothing to those in need, and that the Congolese community already living in Burundi is also organising collections for new arrivals.
                        Still, all the refugees in Cibitoke who spoke to The New Humanitarian said they face major challenges - from struggling to start businesses and afford rent, to dealing with the same hardships as Burundians themselves, including fuel shortages and inflation.
                        Ekyoku said some refugees returned to the DRC because of hunger and hardship in Cibitoke, though he added that many came back again after facing continued insecurity at home.
                        "Rebels continue to gain ground, and clashes are regular," he said. "In addition, all the young students we were teaching have joined [militia groups] to defend the country. So everyone has a weapon, including young people who are not professionally trained."
                        Some refugees living in the area said they have sent their children to Musenyi, where international humanitarian agencies are present - unlike along the border, where support is limited to the few transit centres.
                        Ekyoku said aid groups and the government should treat urban refugees in the same way as they do refugees in the camps. "[They should] help us get our kids to school, and give us food for a few days before our businesses start to flourish," he said.
                        Kasina said UNHCR has been working to identify refugees in Cibitoke province. "Despite limited resources, our teams have increased verification efforts to identify refugees living within host communities and deliver targeted support to the most vulnerable," she said.
                        However, other aid officials from international relief organisations told The New Humanitarian that the Burundian ministry of interior has instructed them to not assist refugees along the border and to focus their efforts in the camp.
                        The officials spoke on condition of anonymity, citing fear of jeopardising their work and straining relations with the government, which is known for putting strict demands on humanitarian groups.
                        Raids in Bujumbura
                        The New Humanitarian also met several refugees in Burundi's largest cities, including Bujumbura. They described mixed feelings - welcoming the greater opportunities of urban areas, but struggling with the higher cost of living.
                        A Congolese refugee who gave only his first name - Pascal - said he moved to Bujumbura because he considers it his second home, having lived there for many years in the past.
                        "I am happy because I live with my old neighbours," Pascal said. "My father bought a plot of land here, and we live without any problems.”I am happy with the welcome from Burundians."
                        However, some refugees in Bujumbura have been detained by security services, which say they are trying to distinguish newly arrived unregistered refugees from those already living and working in the country with standard documentation.
                        The government says the arrests - which took place in homes across several neighbourhoods, including one witnessed by The New Humanitarian - were part of routine security checks. However, refugees described the operations as unsettling.
                        The raids, relocations from transit camps, and daily struggles with housing and livelihoods have all deepened the sense of vulnerability among refugees, many of whom endured abuses in DRC and difficult escapes.
                        A refugee who gave her first name, Mundila, said she walked over 100 kilometres from her village near Bukavu before reaching Burundi. She said a motorcyclist gave her a short lift along the way, but police fleeing Bukavu took the bike, before pro-government militia forces stole her possessions.
                        Bahati Mwanga, from a village south of Bukavu, said she left home after army troops began clashing with allied militias, an increasingly common occurrence. She said the violence revived memories of soldiers killing her husband 25 years ago.
                        Mwanga, who is now in Cibitoke, spoke while surrounded by children she said she is caring for out of compassion. "I didn't know these children around me before. I saw them crying [while travelling to Burundi] and I brought them here with me," she said.
                        A Goma resident called Jacques said he escaped to Burundi after being shot by M23 or Rwandan soldiers (he wasn't clear) while playing football with his nephew. He said he crossed the border to Burundi "without money, without food, and with pain" in his leg.
                        While several refugees know of people who have returned to DRC, many said they are not considering doing the same, given the intensity of the ongoing violence and uncertainty about what they would be going back to.
                        The civil servant who works with women's rights organisations said she fears returning home due to prison breaks that occurred when M23 rebels took over towns, releasing inmates, including convicted rapists, who have since sent threats to her.
                        "If I see my business is not improving and I am facing challenges here in Rugombo, I will leave for the camp as others have done," she told The New Humanitarian. "Even if there is settled peace, I won't go back to Congo."
                        </p>`,
            url: "https://cemauganda.org/news/articles/Escaping-M23"
        }
    };

    // Set up each news preview
    document.querySelectorAll('.news-preview').forEach(card => {
        const articleId = card.getAttribute('data-article-id');
        const readMoreBtn = card.querySelector('.read-more-btn');
        
        readMoreBtn.addEventListener('click', function() {
            openFullscreen(articleId);
        });
    });

    // Close button
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-btn') || 
            e.target === document.querySelector('.fullscreen-overlay')) {
            closeFullscreen();
        }
    });

    // Open fullscreen view
    function openFullscreen(articleId) {
        const article = articles[articleId];
        const overlay = document.getElementById('fullscreen-template');
        
        // Populate content
        overlay.querySelector('.fullscreen-image').src = article.image;
        overlay.querySelector('.fullscreen-image').alt = article.title;
        overlay.querySelector('.fullscreen-title').textContent = article.title;
        overlay.querySelector('.fullscreen-text').innerHTML = article.content;
        
        // Set up social sharing links
        const encodedUrl = encodeURIComponent(article.url);
        const encodedTitle = encodeURIComponent(article.title);
        
        overlay.querySelector('.social-icon.facebook').href = 
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        overlay.querySelector('.social-icon.whatsapp').href = 
            `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        overlay.querySelector('.social-icon.twitter').href = 
            `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        overlay.querySelector('.social-icon.link').href = 
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
        
        // Set up copy link button
        const copyBtn = overlay.querySelector('.social-icon.copy');
        copyBtn.onclick = function(e) {
            e.preventDefault();
            navigator.clipboard.writeText(article.url).then(() => {
                const tooltip = this.parentElement.querySelector('.tooltiptext');
                tooltip.textContent = 'Copied!';
                setTimeout(() => {
                    tooltip.textContent = 'Copy link';
                }, 2000);
            });
        };
        
        // Show overlay
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close fullscreen view
    function closeFullscreen() {
        document.getElementById('fullscreen-template').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

  
