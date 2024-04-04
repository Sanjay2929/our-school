import preschool from "../../assets/images/mine/parents-day.png";
import adult_education from "../../assets/images/mine/adult-education.png";
import summer_camps from "../../assets/images/mine/summer-camp.png";
import center_men from "../../assets/images/testimonials/men-center.png";
import bald_men from "../../assets/images/testimonials/bald-men.png";
import half_face_men from "../../assets/images/testimonials/half-face-men.png";
import men from "../../assets/images/testimonials/men.png";
import sitting_men from "../../assets/images/testimonials/sitting-men.png";
import wommen_first from "../../assets/images/testimonials/women-1.png";
import wommen_second from "../../assets/images/testimonials/women-2.png";
import wommen_third from "../../assets/images/testimonials/women-3.png";
import green_arrow from "../../assets/images/grow-and-save/green-arrow.png";
import dark_green_arrow from "../../assets/images/grow-and-save/dark-green-arrow.png";
import blue_arrow from "../../assets/images/grow-and-save/blue-arrow.png";
import {
  BudgetFriendly,
  CircleFootball,
  ConnectionMade,
  OpenBook,
  Pencil,
  SaveTime,
  SoccurBall,
} from "./Icons";

export const navLinks = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Features",
    url: "#",
  },
  {
    title: "Pricing",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Referral Program",
    url: "#",
  },
  {
    title: "Support",
    url: "#",
  },
];

export const mineSchoolList = [
  {
    heading: "Preschools/Day schools",
    alt: "Preschools",
    images: preschool,
    color: "#cf62cd",
  },
  {
    heading: "K-12/Adult Education Programs",
    alt: "Adult Education",
    images: adult_education,
    color: "#4A8DC5",
  },
  {
    heading: "Summer Camps/Before -and -After-School Programs",
    alt: "Summer Camps",
    images: summer_camps,
    color: "#56BD84",
  },
];

export const preschoolManagement = [
  {
    icon: <SaveTime />,
    title: "Automate & Save Time",
    paragraph:
      " Parents receive payment reminders, access AutoPay, upload immunizations, and stay informed of school news, all with one parent portal login.",
  },
  {
    icon: <BudgetFriendly />,
    title: "Budget Friendly Features",
    paragraph:
      "Cut printing and supply costs by moving your calendar and payments online. Easy access to robust accounting tools makes it easy to keep your school in the green.",
  },
  {
    icon: <ConnectionMade />,
    title: "Connection Made Easy",
    paragraph:
      "Build positive parent relationships with real-time classroom communications and a weekly newsletter that keeps parents engaged and informed.",
  },
];

export const ourBenefits = [
  {
    icon: <OpenBook />,
    title: "Dignissim Sodales",
    paragraph:
      " Ultricies nam natoque viverra quis pulvinar diam. Est viverra nisl et mauris tellus. Dolor libero quis mi ornare. Egestas in fermentum varius nibh eleifend eleifend vel.",
    margin: "mb-[27px] max-[540px]:mb-0",
  },
  {
    icon: <CircleFootball />,
    title: "Intincidunt Nonid",
    paragraph:
      "Maecenas amet amet vitae sed ac morbi pharetra vel. Adipiscing commodo in integer cursus lectus sit nulla. Pellentesque gravida accumsan natoque.",
    margin: "mt-[27px] max-[540px]:mt-0",
  },
  {
    icon: <SoccurBall />,
    title: "Purus Purused",
    paragraph:
      "Pulvinar vestibulum at nunc elit scelerisque. Risus donec neque id sapien nibh egestas lobortis. Vulputate in id elementum nec quam pellentesque.",
    margin: "mb-[27px] max-[540px]:mb-0",
  },
  {
    icon: <Pencil />,
    title: "Cursus Sodales",
    paragraph:
      "Velit nec volutpat vitae ac dui mattis laoreet ultricies cursus. Vel blandit adipiscing mauris turpis ipsum. Tincidunt pulvinar eget tempor vestibulum.",
    margin: "mt-[27px] max-[540px]:mt-0",
  },
];

export const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      {
        title: "Home",
        url: "#",
      },
      {
        title: "Features",
        url: "#",
      },
      {
        title: "Pricing",
        url: "#",
      },
      {
        title: "Referral Program",
        url: "#",
      },
    ],
  },
  {
    heading: "About Us",
    links: [
      {
        title: "Our Story",
        url: "#",
      },
      {
        title: "About Us",
        url: "#",
      },
      {
        title: "Contact Us",
        url: "#",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        title: "Privacy Policy",
        url: "#",
      },
      {
        title: "Term &Conditions",
        url: "#",
      },
      {
        title: "Contact Us",
        url: "#",
      },
    ],
  },
];

export const testimonialsReviews = [
  {
    image: center_men,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    username: "Jane Cooper",
    borderColor: "border-[#56BD84]",
    imageStye: "hidden",
  },
  {
    image: bald_men,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna ",
    username: "Jane",
    borderColor: "border-[#CF62CE]",
    imageStye:
      "sm:top-[150px] top-[180px] sm:right-[97px] right-[10%] lg:w-[102px] w-[60px]",
  },
  {
    image: half_face_men,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, ",
    username: "Jane Cooper",
    borderColor: "border-[#56BD84]",
    imageStye:
      "sm:right-[35%] right-[20%] sm:bottom-[75px] bottom-10 lg:w-[134px] w-[90px]",
  },
  {
    image: men,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit lectus magna fringilla urna, porttitor",
    username: "Jane ",
    borderColor: "border-[#90BDFF]",
    imageStye: "sm:right-[81px] right-10 bottom-[133px] lg:w-[118px] w-[65px]",
  },
  {
    image: sitting_men,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit venenatis, lectus magna fringilla urna, porttitor",
    username: "Jane Cooper",
    borderColor: "border-[#4A8DC5]",
    imageStye:
      "md:bottom-[336px] sm:bottom-[60%] bottom-[70%] xl:right-[22%] md:right-[10%] sm:right-1/2 right-[40%]  lg:w-[68px] w-[50px]",
  },
  {
    image: wommen_first,
    review:
      "Lorem consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    username: "Jane ",
    borderColor: "border-[#4A8DC5]",
    imageStye:
      "lg:top-[129px] lg:top-[150px] max-[500px]:top-[174px] top-[160px] left-[12%] lg:w-[114px] w-[83px]",
  },
  {
    image: wommen_second,
    review:
      "Dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    username: "Jane Cooper",
    borderColor: "border-[#FF90E0]",
    imageStye:
      "md:bottom-[133px] bottom-[70px] sm:left-[81px] left-[40px] lg:w-[152px] w-[80px]",
  },
  {
    image: wommen_third,
    review:
      "Lorem ipsum adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
    username: "Jane ",
    borderColor: "",
    imageStye: "bottom-[40px] left-[29%] lg:w-[68px] w-[50px]",
  },
];

export const growAndSave = [
  {
    title: "One-System Convenience",
    description:
      "Parents can register, pay tuition, join a waitlist, and sign up for school events all with one product.",
    textAlign: "text-center md:text-end",
    style: "",
    image: green_arrow,
  },
  {
    title: "On-time Payments",
    description:
      "Automated payment reminders and late fees, with access to AutoPay, make late payments a thing of the past.",
    textAlign: "text-center md:text-center",
    style: "lg:pt-[143px] md:pt-[100px]",
    image: dark_green_arrow,
  },
  {
    title: "Effortless Communication",
    description:
      "An online school calendar, class happenings, easy email blasts, app messaging, and a weekly newsletter keep parents informed and engaged.",
    textAlign: "text-center md:text-start",
    style: "",
    image: blue_arrow,
  },
];
