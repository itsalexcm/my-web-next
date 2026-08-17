export default {
  id: "calendar",
  title: "Simplifying the scheduling process",
  subtitle: "The scheduling experience at Greyfinch was redesigned to make appointment management faster, clearer, and more reliable for clinic staff.",
  thumbnail: "/assets/imgs/greyfinch/gf_img_01.webp",
  intro: "Streamlined appointment scheduling for clinic staff at Greyfinch.",
  tags: ["Calendar", "Health", "Product Design"],
  components: [
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_01.webp",
            alt: "Greyfinch calendar"
          }
        ],
        caption: "Greyfinch calendar."
      }
    },
    {
      type: "CaseMeta",
      data: {
        content: [
          {
            label: "My Role",
            text: "Lead Product Designer · Research, IA, Interaction Design, Visual Design, User Journey, Design System, Prototyping, User Testing"
          },
          {
            label: "Team",
            list: [
              "Product Designer (Me)",
              "Product Manager",
              "CTO",
              "Engineer x 2"
            ]
          },
          {
            label: "Timeline",
            text: "6 months"
          },
          {
            label: "Tools",
            text: "Figma, Google Spreadsheet, Miro, Notion, Maze, Loom, Zoom"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "01. Context",
        content: [
          {
            customWidth: "custom-width",
            title: "About Greyfinch",
            text:
              `<a href="https://greyfinch.com/" target="_blank" class="link">Greyfinch ↗</a> is a <span class="bold">Practice Management Software (PMS)</span> designed primarily for orthodontic clinics. Its platform enables the management of tasks ranging from patient acquisition to appointment scheduling, billing, and communication.
              <br /><br />
              At the heart of the platform lies the Calendar, a crucial tool for all three primary user roles: doctors, front-desk, and assistants. It allows users to manage appointments, view daily schedules, and organize doctor chair assignments at a glance.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        transparent: "yes",
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_02.webp",
            alt: "Greyfinch PMS"
          }
        ],
        caption: "Greyfinch PMS."
      }
    },
    {
      type: "CaseBlock",
      data: {        
        title: "02. Summary",
        direction: "direction-column",
        content: [
          {
            title: "The problem",
            text:
              `<span class="bold">A spike in support tickets</span> related to the calendar revealed flaws in the scheduling flow. Improving speed, clarity, and reliability became essential to boost staff performance.
              <br /><br />
              The original scheduling flow relied on <span class="bold">two separate panels</span> (one for patient info, another for appointment settings), making the process fragmented, and hard to follow for staff.`
          },
          {
            title: "The solution",
            text: `In under 6 months, we redesigned the experience to fix major usability issues and make daily workflows smoother for clinics staff.
            <br /><br />
            <span class="bold">I led the effort from discovery to delivery</span>, aligning with stakeholders, running research sessions, shaping design directions, and validating improvements with real users.`
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {        
        title: "03. Impact",
        direction: "direction-column",
        content: [
          {
            panels: [
              {
                label: `+40%`,
                text: "Faster scheduling process."
              },
              {
                label: "-28%",
                text: "Fewer support requests."
              },
              {
                label: `5+`,
                text: "Top issues resolved."
              }
            ],
            panelStyle: "beta"
          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "Hey, what if we look into why we’re getting so many support tickets?"
      }
    },
    {
      type: "CaseTitle",
      data: {
        title: "Key features",
        text: "Scheduling tasks were consolidated into a streamlined interface, improving speed, clarity, and overall confidence across roles."
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_03.webp",
            alt: "Patient info"
          }
        ],
        caption: "Sidebar scheduling wizard. Step 1/2 (Patient info)."
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            listType: "ol",
            start: 1,
            list: [
              `<span class="bold">Next and Completed appointments</span>: Appointments were split into upcoming and past, making schedules easier to scan.`,
              `<span class="bold">Detailed patient information</span>: Key patient info was added to the flow, removing the need to switch sidebars.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_04.webp",
            alt: "Scheduling options"
          }
        ],
        caption: "Sidebar scheduling wizard. Step 2/2 (Scheduling options)."
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            listType: "ol",
            start: 3,
            list: [
              `I added a dedicated section for <span class="bold">appointment notes</span>, giving staff a simple, consistent way to capture important context. This was one of the most requested features.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "We don’t need to reinvent anything but just bring order to what we already have."
      }
    },
    {
      type: "CaseTitle",
      data: {
        title: "Design process",
        text: "The process followed a clear path: understanding real-world usage, identifying key pain points, prioritizing ideas based on impact, and validating solutions with users."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "04. Research",
        direction: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "Understanding the problem",
            text:
              `I reviewed past research, support logs, and ran short surveys. <span class="bold">Most insights came from interviews</span> with front-desk staff and doctors. This is what I did so far:
              <br/><br/>
              `,
            listType: "ul",
            list: [
              `<span class="bold">5 shadowing sessions</span> with front-desk staff.`,
              `<span class="bold">7 – 8 user interviews</span> across different roles.`,
              `<span class="bold">A competitive benchmark</span> to assess how other platforms approached appointment scheduling.`,
            ]
          },
          {
            panels: [
              {
                text:
                  `<span class="bold">The options are split between different panels</span>, and sometimes I’m not sure if I’ve completed all the steps correctly.
                  <br/><br/>
                  <span class="bold">Front-desk staff</span>`
              }
            ],
            panelStyle: "zeta"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        direction: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "Focusing on what matters",
            text: `I captured all findings in a shared spreadsheet, organized by product areas, especially the Schedule. <span class="bold">I also mapped the scheduling journey</span> to pinpoint delays and friction.
            <br /><br />
            Then, we used effort–value analysis to help us <span class="bold">prioritize quick wins and high-impact fixes</span> aligned with both user needs and business goals.
            <br /><br />`
          },
          {
            panels: [
              {
                label: "Key Insights",
                list: [
                  "Disconnected steps made the process harder.",
                  "Redundant actions slowed down daily tasks.",
                  "The interface lacked guidance for confident use."
                ]
              }
            ],
            panelStyle: "gamma",
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_05.webp",
            alt: "User journey"
          }
        ],
        caption: "User journey."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "05. Ideation",
        content: [
          {
            customWidth: "custom-width",
            title: "Reimagining the experience",
            text:
              `Based on the research, <span class="bold">the main idea was to merge the two-panel flow into one simplified view</span>. I reorganized the layout, removed clutter, and added features like editable notes and better patient context.
              <br /><br />
              This helped reducing friction without adding complexity. Here’s the original setup: patient info and appointment details lived in separate panels, causing confusion, missed steps, and slower bookings.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        layout: "wrap",
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_06.webp",
            alt: "Old structure"
          },
          {
            src: "/assets/imgs/greyfinch/gf_img_07.webp",
            alt: "Old structure"
          }
        ],
        caption: "Old structure. 2 sidebars."
      }
    },
    {
      type: "CaseBlock",
      data: {
        align: "justify-center",
        content: [
          {
            customWidth: "custom-width",
            text: `In contrast, the redesigned sidebar <span class="bold"> combined all necessary actions into a single, streamlined wizard</span>. This new structure reduced ambiguity, improved visibility of key information, and created a more linear and confident scheduling flow for users.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        layout: "wrap",
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_08.webp",
            alt: "New structure"
          },
          {
            src: "/assets/imgs/greyfinch/gf_img_09.webp",
            alt: "New structure"
          }
        ],
        caption: "New structure. 1 wizard sidebar."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "06. Exploring",
        content: [
          {
            customWidth: "custom-width",
            title: "Shaping through iteration",
            text:
              `Before finalizing the redesign, I explored different layout directions to balance structure, clarity, and ease of use. These early concepts helped shape the interface that followed.`
          }
        ]
      }
    },
    {
      type: 'CarouselComponent',
      data: {
        images: [
          { src: '/assets/imgs/greyfinch/gf_carousel_01.webp', alt: 'Image 01' },
          { src: '/assets/imgs/greyfinch/gf_carousel_02.webp', alt: 'Image 02' },
          { src: '/assets/imgs/greyfinch/gf_carousel_03.webp', alt: 'Image 03' },
          { src: '/assets/imgs/greyfinch/gf_carousel_04.webp', alt: 'Image 04' },
          { src: '/assets/imgs/greyfinch/gf_carousel_05.webp', alt: 'Image 05' },
          { src: '/assets/imgs/greyfinch/gf_carousel_06.webp', alt: 'Image 06' },
          { src: '/assets/imgs/greyfinch/gf_carousel_07.webp', alt: 'Image 07' }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "07. Final UI",
        content: [
          {
            customWidth: "custom-width",
            title: "A refined interface",
            text:
              `Collaboration with engineers was constant from the start to ensure feasibility, as the calendar was a technically complex feature.
              <br /><br />
              The final design clarified <span class="bold">core scheduling actions</span>. A concise 2-step sidebar guides staff from patient details to scheduling, with clear context throughout:
              <br /><br />`,
            list: [
              `<span class="bold">Patient</span> shows key details at a glance.`,
              `<span class="bold">Scheduling</span> focuses on selecting time, provider, and type.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {        
        direction: "direction-column",
        alignContent: "align-center",
        content: [
          {
            image:  {
              src: "/assets/imgs/greyfinch/gf_img_10.webp",
              alt: "Patient",
              class: "case-img-inline"
            }
          },
          {
            panels: [
              {
                label: "Patient",
                text: "Shows key patient info like contact details and appointment history for quick context."
              }
            ],
            panelStyle: "alpha"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {        
        direction: "direction-column",
        alignContent: "align-center",
        content: [
          {
            image:  {
              src: "/assets/imgs/greyfinch/gf_img_11.webp",
              alt: "Scheduling",
              class: "case-img-inline"
            }
          },
          {
            panels: [
              {
                label: "Scheduling",
                text: "Lets staff choose date, slot, provider, and filters with clear availability indicators."
              }
            ],
            panelStyle: "alpha"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "08. Validating the Idea",
        content: [
          {
            customWidth: "custom-width",
            title: "Early feedback on core concepts",
            text:
              `I created a prototype ranging from wireframes to near-final UI states. Each iteration was designed to test a specific part of the experience, from layout hierarchy to interaction logic. And to evaluate clarity, speed, and ease of use.
              <br /><br />
              <span class="bold">We tested the redesign</span> with front-desk staff, doctors, and new users. Creating, editing, and rescheduling tasks showed the sidebar improved speed and reduced errors. Minor issues were addressed before launch.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/greyfinch/gf_img_12.webp",
            alt: "Greyfinch calendar"
          }
        ],
        caption: "Full view of the calendar."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "09. Impact vs. learnings",
        direction: "direction-column",
        content: [
          {
            title: "Outcomes",
            text:
              `The redesign led to measurable improvements across key metrics, while remaining intuitive enough to require virtually no additional training for clinic staff.
              <br /><br />`,
            listType: "ul",
            list: [
              `<span class="bold">+40%</span> faster appointment creation.`,
              `<span class="bold">-28%</span> support requests.`,
              `<span class="bold">5+</span> top usability issues resolved.`
            ]
          },
          {
            title: "From friction to focus",
            text: `The project underscored the value of clarity over complexity. Small design tweaks drove meaningful gains in efficiency and confidence.
            <br /><br />
            Building on past audits and support insights helped us move fast without sacrificing quality. Close collaboration with engineering ensured scalable, realistic implementation.`

          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "Sometimes the best improvement is making everything feel easier than it really is.",
        author: "Scheduling mantra"
      }
    }
  ]
}