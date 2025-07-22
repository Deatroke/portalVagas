export type SiteConfig = typeof siteConfig;
import group_of_people from "@/assets/images/group_of_people.png";
import briefcase from "@/assets/images/briefcase.png";
import company_building from "@/assets/images/company_building.png";
import new_job from "@/assets/images/new_job.png";
import { title } from "process";

export const siteConfig = {
  name: "Talent Hub",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Encontrar Vagas",
      href: "/jobs",
    },
    {
      label: "Empresa",
      href: "/company",
    },
    {
      label: "Criar CV",
      href: "/create-resume",
    },
    {
      label: "Sobre",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  imagePaths: [
    {
      image: briefcase.src,
      title: "12.345",
      description: "Vagas ativas",
      altText: "Briefcase",
    },
    {
      image: company_building.src,
      title: "5.678",
      description: "Empresas",
      altText: "Company Building",
    },
    {
      image: group_of_people.src,
      title: "38.946",
      description: "Candidatos",
      altText: "Group of People",

    },
    {
      image: new_job.src,
      title: "1.234",
      description: "Novas Vagas",
      altText: "New Job",
    },
  ],
  popularCategories: [
    {
      title: "Desenvolvedor Frontend",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "72+ vagas disponíveis",
      altText: "Frontend Developer",
    },
    {
      title: "Software tester",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "120+ vagas disponíveis",
      altText: "Software Tester",
    },
    {
      title: "Software Developer",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "104+ vagas disponíveis",
      altText: "Software Developer",
    },
    {
      title: "Designer Gráfico",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "64+ vagas disponíveis",
      altText: "Graphic Designer",
    },
    {
      title: "Team Leader",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "14+ vagas disponíveis",
      altText: "Team Leader",
    },
    {
      title: "UI/UX Designer",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "101+ vagas disponíveis",
      altText: "UI/UX Designer",
    },
    {
      title: "Gerente de Projetos",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "200+ vagas disponíveis",
      altText: "Project Manager",
    },
    {
      title: "Desenvolvedor Backend",
      image: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      subtitle: "57+ vagas disponíveis",
      altText: "Backend Developer",
    },
  ]
};
