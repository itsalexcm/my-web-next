export default {
  id: "dashboard",
  title: "Improving the dashboard experience",
  subtitle: "This case study explores how we improved the clarity and usability of Finsit’s dashboard, a tool used by accountants and their clients to visualize financial data.",
  thumbnail: "/assets/imgs/finsit/wk_img_01.webp",
  intro: "Making Finsit’s financial data easier to explore and understand.",
  tags: ["Data", "Financial", "Product Design"],
  components: [
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/finsit/wk_img_01.webp",
            alt: "Finsit"
          },
        ],
        caption: "Finsit, by Wolters Kluwer."
      },
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
              "Engineer",
              "QA"
            ]
          },
          {
            label: "Timeline",
            text: "4 months"
          },
          {
            label: "Tools",
            text: "Figma, Google Spreadsheet, Slack, Miro, Maze, Basecamp, Zoom"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "01. Context",
        direction: "direction-column",
        directionContent: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "What is Finsit?",
            text:
              `<a href="https://www.wolterskluwer.com/" target="_blank" class="link">Finsit ↗</a> is Wolters Kluwer's online solution that <span class="bold">simplifies complex financial data into easy-to-understand infographics</span>. It presents accounting information visually, with comparisons and trends, enabling users to analyze data more effectively.
              <br /><br />
              The platform is built around three core pillars:`
          },
          {
            pilars: [
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3072 7.21938C10.9493 5.61869 11.2704 4.81835 11.7919 4.70742C11.9291 4.67826 12.0708 4.67826 12.208 4.70742C12.7295 4.81835 13.0506 5.61869 13.6927 7.21938C14.0578 8.12966 14.2404 8.5848 14.582 8.89436C14.6778 8.98119 14.7818 9.05852 14.8926 9.12527C15.2874 9.36325 15.7803 9.40739 16.7661 9.49568C18.4348 9.64513 19.2692 9.71985 19.524 10.1956C19.5768 10.2941 19.6127 10.4008 19.6302 10.5112C19.7146 11.0442 19.1012 11.6023 17.8744 12.7184L17.5338 13.0284C16.9602 13.5502 16.6735 13.8111 16.5076 14.1367C16.4081 14.332 16.3414 14.5423 16.3101 14.7593C16.258 15.121 16.342 15.4995 16.5099 16.2565L16.5699 16.5269C16.8711 17.8844 17.0217 18.5632 16.8337 18.8969C16.6649 19.1965 16.3538 19.3884 16.0102 19.4048C15.6277 19.4231 15.0887 18.9839 14.0107 18.1055C13.3005 17.5268 12.9454 17.2374 12.5512 17.1244C12.191 17.0211 11.8089 17.0211 11.4487 17.1244C11.0545 17.2374 10.6994 17.5268 9.98917 18.1055C8.91119 18.9839 8.37221 19.4231 7.98968 19.4048C7.64608 19.3884 7.33504 19.1965 7.16617 18.8969C6.97818 18.5632 7.12878 17.8844 7.42997 16.5269L7.48998 16.2565C7.65794 15.4995 7.74191 15.121 7.6898 14.7593C7.65854 14.5423 7.59182 14.332 7.49232 14.1367C7.32645 13.8111 7.03968 13.5502 6.46613 13.0284L6.12546 12.7184C4.89867 11.6023 4.28527 11.0442 4.36975 10.5112C4.38724 10.4008 4.42312 10.2941 4.47589 10.1956C4.73069 9.71985 5.56507 9.64513 7.23384 9.49568C8.21962 9.40739 8.71251 9.36325 9.10735 9.12527C9.2181 9.05852 9.32211 8.98119 9.41793 8.89436C9.75954 8.5848 9.94211 8.12966 10.3072 7.21938Z" fill="var(--text-primary)" stroke="var(--text-primary)" stroke-width="2"/>
                  </svg>`,
                label: "Clarity",
                text: "Visually intuitive dashboards that help business owners easily understand their numbers."
              },
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4C16.8856 4 17.8283 4.00015 18.4141 4.58594C18.9998 5.17172 19 6.11438 19 8V17C19 18.8856 18.9998 19.8283 18.4141 20.4141C17.8283 20.9998 16.8856 21 15 21H9C7.11438 21 6.17172 20.9998 5.58594 20.4141C5.00015 19.8283 5 18.8856 5 17V8C5 6.11438 5.00015 5.17172 5.58594 4.58594C6.17172 4.00015 7.11438 4 9 4H15ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9Z" fill="var(--text-primary)"/>
                  </svg>`,
                label: "Reporting",
                text: "Customizable reports with flexible settings tailored to each client’s and business needs."
              },
              {
                icon:
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 4C15.8089 4 17.2138 3.99971 18.2227 4.67383C18.6593 4.96562 19.0344 5.34068 19.3262 5.77734C20.0003 6.78624 20 8.19108 20 11C20 13.8089 20.0003 15.2138 19.3262 16.2227C19.0344 16.6593 18.6593 17.0344 18.2227 17.3262C17.3413 17.9151 16.1577 17.9896 14 17.999V18L12.8945 20.2109C12.526 20.948 11.474 20.948 11.1055 20.2109L10 18V17.999C7.8423 17.9896 6.6587 17.9151 5.77734 17.3262C5.34068 17.0344 4.96562 16.6593 4.67383 16.2227C3.99971 15.2138 4 13.8089 4 11C4 8.19108 3.99971 6.78624 4.67383 5.77734C4.96562 5.34068 5.34068 4.96562 5.77734 4.67383C6.78624 3.99971 8.19108 4 11 4H13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H9ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9Z" fill="var(--text-primary)"/>
                  </svg>`,
                label: "Advisory",
                text: "A unique built-in consulting layer that enables accountants to provide contextual insights."
              }
            ]
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
            title: "The challenge",
            text:
              `With Finsit preparing to launch in Spain and Denmark, <span class="bold">we were asked to improve the Overview Dashboard</span> (the entry point for most users).
              <br /><br />
              Rather than starting from scratch, the goal was to refine and simplify what mattered most, making the experience clearer and more welcoming for new markets.`
          },
          {
            title: "Project planning",
            text: "As Lead Designer, I led the end-to-end design process:",
            panels: [
              {
                label: "Discovery",
                text: `<span class="bold">Consolidated prior research</span>, captured new user insights, and clarified business needs.`
              },
              {
                label: "Design",
                text: `<span class="bold">Identified main opportunities</span>, explored solutions, and iterated through testing.`
              },
              {
                label: "Handoff",
                text: `<span class="bold">Polished the UI and partnered with devs</span> to ensure a high-quality implementation.`
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
        title: "03. Impact",
        direction: "direction-column",
        content: [
          {
            panels: [
              {
                label: `+197%`,
                text: "Revenue growth over 2 years."
              },
              {
                label: "2+",
                text: "New markets launched."
              },
              {
                label: `+25%`,
                text: "Organic growth driven by product adoption."
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
        text: "Before launching into new markets, we need to make sure the dashboard feels clear and intuitive from day one.",
        author: "Business request"
      }
    },
    {
      type: "CaseTitle",
      data: {
        title: "From data to clarity",
        text: "We introduced small but meaningful improvements to the dashboard to help users focus on what matters, reducing visual noise and making insights easier to spot."
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/finsit/wk_img_02.webp",
            alt: "Finsit"
          }
        ]
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
              `<span class="bold">Graph legends & indicators</span>: Added clear legends and color indicators to help users understand each data point at a glance.`,
              `<span class="bold">Detail tooltips</span>: Included informative tooltips that appear on hover, improving clarity without clutter.`
            ]
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
            src: "/assets/imgs/finsit/wk_img_03.webp",
            alt: "Business breakdown"
          },
          {
            src: "/assets/imgs/finsit/wk_img_04.webp",
            alt: "Profit & Loss"
          }
        ],
        caption: "Zoom detail."
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
              `<span class="bold">Business Breakdown section</span>: Introduced a new area that displays performance by business segment, highlighting top categories and trends.`,
              `<span class="bold">Clearer date labeling</span>: Each month now includes its corresponding year, improving clarity when reviewing long-term data. Especially across fiscal boundaries.`
            ]
          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "Clarity isn’t about adding more explanations, but removing the need for them.",
        author: "Design notes"
      }
    },
    {
      type: "CaseTitle",
      data: {
        title: "How I got there",
        text: "From research to final visuals, every decision aimed to make the dashboard more intuitive and less overwhelming."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "04. Discovery",
        content: [
          {
            customWidth: "custom-width",
            title: "Research approach",
            text:
              `<span class="bold">I did a full site audit recently</span> as part of a previous project focused on introducing a new design system. That audit already highlighted key areas for improvement, including the structure of the main navigation and overall content hierarchy.
              <br /><br />
              Building on that foundation, I complemented the research with:
              <br /><br />`,
            listType: "ul",
            start: 1,
            list: [
              `A series of <span class="bold">5-6 user interviews</span>.`,
              `<span class="bold">An internal survey</span> across the Finsit team.`,
              `A focused <span class="bold">heuristic evaluation</span> of the existing dashboard.`
            ]
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
            src: "/assets/imgs/finsit/wk_img_05.webp",
            alt: "Research results"
          }
        ],
        caption: "Some results from interviews."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "05. Findings",
        direction: "direction-column",
        directionContent: "direction-column",
        content: [
          {
            customWidth: "custom-width",
            title: "What stood out",
            text: "These were the main pain points in the current design:"
          },
          {
            panels: [
              {
                label: "Business Side",
                list: [
                  "Entry point design influenced new user trust.",
                  "Fragmented UI reduced perceived reliability.",
                  "Rigid layouts didn’t scale across client needs."
                ]
              },
              {
                label: "User Side",
                list: [
                  "Data visuals lacked clarity in key moments.",
                  "Excessive info density led to cognitive strain.",
                  "Users got lost navigating to essential features."
                ]
              },
            ],
            panelStyle: "gamma"
          }
        ]
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "06. Ideation",
        content: [
          {
            customWidth: "custom-width",
            title: "Design time",
            text:
              `Through a series of <span class="bold">workshops with key stakeholders</span>, we aligned on business priorities, clarified the most valuable opportunities, and defined both user and functional needs for <span class="bold">a focused MVP</span>.
              <br /><br />
              Challenges I faced as Lead Designer:
              <br /><br />`,
            listType: "ul",
            list: [
              `<span class="bold">Negotiated phased rollouts</span> for quick wins and long-term gains.`,
              `<span class="bold">Led workshops</span> to align conflicting priorities.`,
              `<span class="bold">Worked with engineers</span> to overcome legacy UI limits.<br /><br />`
            ],
            textAfterList: `I also updated the design system to ensure every change was consistent and scalable across the platform.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/finsit/wk_img_06.webp",
            alt: "UI color system"
          }
        ],
        caption: "UI color system."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "07. Validation",
        content: [
          {
            customWidth: "custom-width",
            title: "Testing the vision",
            text:
              `To ensure the redesign would succeed in both usability and adoption, <span class="bold">I led a full validation cycle</span> to refine the product before rollout: designing test plans, running sessions with end users, and aligning stakeholders.
              <br /><br />`,
            listType: "ul",
            list: [
              `<span class="bold">Usability testing</span>: 2 rounds with accountants and business owners focusing on onboarding, charts, and navigation.`,
              `<span class="bold">Post-rollout impact tracking</span>: A/B comparisons (legacy vs. new dashboard) measuring task success, time-to-insight, and misread rates confirmed gains in clarity and efficiency.`,
              `<span class="bold">Stakeholder reviews</span>: aligned PM, sales, and engineering on release criteria and scope.
              <br /><br />`
            ],
            textAfterList: `The redesign gave users the confidence to interpret charts more accurately, <span class="bold">made navigating the dashboard feel simpler</span> and more natural, and ultimately won stakeholder support for a phased release.`
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/finsit/wk_img_07.webp",
            alt: "Finsit",
            borderRadius: "custom-01"
          }
        ]
      }
    },
    {
      type: "CaseMedia",
      data: {
        images: [
          {
            src: "/assets/imgs/finsit/wk_img_08.webp",
            alt: "Finsit",
            borderRadius: "custom-02"
          }
        ],
        caption: "Final UI."
      }
    },
    {
      type: "CaseBlock",
      data: {
        title: "08. Impact vs. learnings",
        direction: "direction-column",
        content: [
          {
            title: "Outcomes",
            text:
              `The results of the redesign and the introduction of a new design system were substantial, driving both user satisfaction and measurable business growth:
              <br /><br />`,
            listType: "ul",
            start: 1,
            list: [
              `<span class="bold">Revenue</span>: Revenue grew from €1.5M to €4.5M in 2 years.`,
              `<span class="bold">Organic growth</span>: Jumped from 10% to 35%.`,
              `<span class="bold">Expansion</span>: Successfully launched in Spain and Denmark.`
            ]
          },
          {
            title: "Smarter, not bigger",
            text:
              `
              This project reinforced the value of designing with constraints. Instead of overhauling the entire dashboard, we focused on refining what truly mattered to users.
              <br /><br />
              Aligning early with business goals helped us prioritize and move faster. Combining previous audits with light research kept things efficient throughout.
              `
          }
        ]
      }
    },
    {
      type: "CaseLine",
      data: {
        text: "These changes helped set the stage for years of growth across multiple markets.",
        author: "Product Manager"
      }
    }
  ]
}