import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  bridge: true,
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    hero: Hero,
    menuSection: MenuSection,
    menuItem: MenuItem,
  },
  apiOptions: {
    region: 'eu',
  },
});