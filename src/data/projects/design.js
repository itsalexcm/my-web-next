export default {
  id: "design",
  title: "Design System at eDreams",
  subtitle: "How we built a scalable system to unify 5 brands, streamline workflows, and empower cross-functional product teams.",
  thumbnail: "/assets/imgs/edreams/ed_img_01.webp",
  intro: "Unifying 5 brands with a scalable, cross-functional design system.",
  tags: ["Design System", "Travel", "Tokens"],
  components: [
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/edreams/ed_img_01.webp",
            alt: "eDreams Design System"
          }
        ],
        caption: "eDreams."
      },
    },
    {
      type: "CaseMeta",
      data: {
        content: [
          {
            label: "My Role",
            text: "UX Engineer · Design Tokens, Component Library, Prototyping, Accessibility, Frontend Integration"
          },
          {
            label: "Team",
            list: [
              "UX Engineer (Me)",
              "Product Designer x 2",
              "Product Owner",
              "CTO",
              "Engineer x 6"
            ]
          },
          {
            label: "Timeline",
            text: "12 months"
          },
          {
            label: "Tools",
            text: "Sketch/Figma, VS Code, Storybook, Google Spreadsheet, Google Slides, Miro, Slack"
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
            title: "Welcome to eDO",
            text:
              `<a href="https://www.edreams.com/" target="_blank" class="link">eDreams ODIGEO ↗</a> is <span class="bold">one of the world’s largest online travel agencies</span>, operating 5 brands: eDreams, Go Voyages, Opodo, Travellink, and Liligo. It serves millions of travelers yearly, using technology to simplify trip planning and booking.
              <br /><br />
              With a product organization spanning over <span class="bold">20 designers</span>, <span class="bold">60 engineers</span> and many UX researchers and writers, consistency and efficiency were becoming harder to maintain as the platform evolved.`
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "02. Summary",
        direction: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "Why we did this?",
            texts: [
              `As design and dev teams grew, misalignment increased. Despite rituals like design critiques, teams often duplicated efforts or made isolated choices, slowing progress:
              <br /><br />`
            ],
            listType: "ul",
            list: [
              `<span class="bold">Misaligned visual styles</span> across the product.`,
              `<span class="bold">Repeated implementation</span> of similar UI elements.`,
              `<span class="bold">Increased handoff friction</span> between design and dev.<br /><br />`
            ],
            textAfterList: 
              `As a founding DS Team member, I kicked off the project after spotting growing misalignments. <span class="bold">I worked with POs, designers, and engineers</span> to shape the roadmap.`,
          },
          {
            title: "Objectives",
            text:
              `Together, <span class="bold">we defined clear goals</span> to guide our work, align expectations, and ensure the system brought real, measurable value to product teams across the organization.`,
            panels: [
              {
                label: "Visual Consistency",
                text: "Align core visuals (colors, typography, etc) while keeping each brand unique."
              },
              {
                label: "Design and dev efficiency",
                text: "Reduce redundancy with reusable foundations for faster work."
              },
              {
                label: "Scalable Collaboration",
                text: "Create a shared language to help teams collaborate across squads."
              }
            ],
            panelStyle: "alpha"
          },
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
                label: `100+`,
                text: "Components standardized."
              },
              {
                label: "-52%",
                text: "Total amount of design tokens."
              },
              {
                label: `15+`,
                text: "Squads aligned via training and docs."
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
        text: "Let’s build one system flexible enough to speak all five accents."
      }
    },
    {
      type: "CaseTitle",
      data: {
        title: "Designing with purpose and precision",
        text: "Here’s how we approached the challenge, standardizing tokens, aligning across teams, and scaling the system methodically."
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/edreams/ed_img_02.webp",
            alt: "UI components"
          }
        ],
        caption: "Reusable components powering consistent experiences."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "04. Team",
        content: [
          {
            customWidth: "custom-width",
            title: "Better together",
            text:
              `It started when I noticed growing inconsistencies across squads. Together with a small group of like-minded designers and engineers, we laid the groundwork for what would become the Design System Team.
              <br /><br />
              Our main goal was to build a library that served both <span class="bold">design and development</span>, while also improving collaboration on 3 levels:
              <br /><br />`,
            listType: "ul",
            list: [
              "Within each squad.",
              "Between product teams (design and dev).",
              "Across the entire organization."
            ],
            textAfterList: `<br />Securing buy-in was one of the toughest parts. Since design systems show value over time, <span class="bold">I had to invest in ongoing evangelization</span>: workshops, meetings, and internal presentations helped align teams and build momentum.`
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "05. Foundations",
        content: [
          {
            customWidth: "custom-width",
            title: "Standardizing the essentials",
            text:
              `<span class="bold">Design tokens were our first focus</span> and our biggest challenge. I made a full UI audit that revealed mismatched components and inconsistencies in typography, color, spacing, and iconography across the product.
              <br /><br />
              <span class="bold">One of the most complex parts was color</span>. Supporting 5 brands, each with its own palette, created a messy and fragmented experience. After analyzing nearly 70 unique colors, we reduced them by half while maintaining brand integrity.
              <br /><br />`,
            listType: "ul",
            list: [
              `<span class="bold">Unique colors:</span> 70 → 30 <span class="small">(-57%)</span>`,
              `<span class="bold">CSS payload:</span> 1.04MB → 500KB <span class="small">(-52%)</span>`,
              `<span class="bold">Unique declarations:</span> 3,755 → 1,000 <span class="small">(-73%)</span>`
            ],
            textAfterList:
              `<br />To support usage, we created <span class="bold">extensive documentation</span> and naming conventions that made the tokens easy to apply and maintain across design and development.`
          },
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        layout: "wrap",
        images: [
          {
            src: "/assets/imgs/edreams/ed_img_03.webp",
            alt: "Spacing overview"
          },
          {
            src: "/assets/imgs/edreams/ed_img_04.webp",
            alt: "Iconography examples from the system"
          }
        ],
        caption: "Foundations are the core elements of every design system."
      }
    },
    {
      type: 'CarouselComponent',
      data: {
        customClass: 'margin-top',
        images: [
          { src: '/assets/imgs/edreams/ed_carousel_01.webp', alt: 'Design System example 1' },
          { src: '/assets/imgs/edreams/ed_carousel_02.webp', alt: 'Design System example 2' },
          { src: '/assets/imgs/edreams/ed_carousel_03.webp', alt: 'Design System example 3' },
          { src: '/assets/imgs/edreams/ed_carousel_04.webp', alt: 'Design System example 4' },
          { src: '/assets/imgs/edreams/ed_carousel_05.webp', alt: 'Design System example 5' }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "06. Components",
        content: [
          {
            customWidth: "custom-width",
            title: "Systematizing the UI",
            text:
              `Once tokens were in place, we moved on to components. We built a library of shared elements covering core needs: <span class="bold">buttons, inputs, modals, navigation, and more</span>.
              <br /><br />
              We kept each component brand-aware, responsive, and accessible by default. Collaboration with engineers was constant to ensure feasibility and alignment with dev practices.`
          }
        ]
      }
    },
    {
      type: 'CaseMedia',
      data: {
        images: [
          {
            src: '/assets/imgs/edreams/ed_img_05.webp',
            alt: 'Component structure with layout guidelines'
          }
        ],
        caption: "Component anatomy with spacing and structural guidelines."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "07. Evangelize",
        content: [
          {
            customWidth: "custom-width",
            title: "Driving adoption",
            text:
              `To ensure teams could actually use the system, <span class="bold">I ran onboarding sessions for designers and engineers</span>, created clear documentation in Storybook, and embedded system leads into squads to offer real-time help.
              <br /><br />
              Adoption grew steadily as teams saw the benefits: less friction, faster iteration, fewer inconsistencies. <span class="bold">A major win came when a skeptical team used the system for a key launch</span> and delivered 30% faster.
              <br /><br />
              Evangelizing the system required consistent effort. As I said, I had to invest in workshops, meetings, and hands-on support that helped teams gradually adopt the new standards.`
          }
        ]
      }
    },
    {
      type: 'CaseMedia',
      data: {
        images: [
          {
            src: '/assets/imgs/edreams/ed_img_06.webp',
            alt: 'Storybook'
          },
          {
            src: '/assets/imgs/edreams/ed_img_07.webp',
            alt: 'Accessibility'
          }
        ],
        caption: "Accessibility was a key focus."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "08. Next steps",
        direction: "direction-column",
        content: [
          {
            title: "Outcome",
            panels: [
              {
                list: [
                  `<span class="bold">-52% tokens</span>, boosting clarity and speed.`,
                  `<span class="bold">Stronger design–dev collaboration</span>.`,
                  `<span class="bold">Faster delivery</span> using reusable assets.`
                ]
              }
            ],
            panelStyle: "gamma"
          },
          {
            customWidth: "custom-width",
            title: "Ongoing evolution",
            text:
              `<span class="bold">The new design system delivered clear value</span>. With the foundations firmly in place, our focus shifted toward long-term maintenance and thoughtful expansion.
              <br /><br />`,
            textAfterList: `By keeping an <span class="bold">open feedback loop</span> through retrospectives, monthly syncs, and Slack channels, we ensured the system stayed relevant and evolved with product needs.`
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "09. Reflections",
        content: [
          {
            customWidth: "custom-width",
            text:
              `Building the design system was as much about people as it was about components. <span class="bold">Evangelizing internally, managing expectations, and iterating based on real feedback</span> were essential to making it work.
              <br /><br />
              Some of the most valuable lessons came from setbacks, like overengineering early components or underestimating the support needed for adoption. These helped us recalibrate and improve both the system and the process behind it.`
          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "A good design system doesn’t just unify; it makes teams feel like they’re building together."
      }
    }
  ]
}