import { AdCampaignVisual } from "./AdCampaignVisual";
import { SearchVisibilityVisual } from "./SearchVisibilityVisual";
import { LocalMapVisual } from "./LocalMapVisual";
import { ContentGridVisual } from "./ContentGridVisual";
import { VideoFrameVisual } from "./VideoFrameVisual";
import { WorkflowVisual } from "./WorkflowVisual";
import { RealWorkVisual } from "./RealWorkVisual";

/**
 * Every landing-page hero previously fell back to AssetPlaceholder's
 * "no file yet" dashed box, since no real campaign screenshots exist for
 * services AMREN is still building a portfolio in. Rather than ship a
 * visibly broken/unfinished slot to paid traffic, each service gets an
 * honest, clearly-labelled conceptual visual instead — never a fabricated
 * dashboard, ranking graph or client result. Web Development is the one
 * exception: it gets a real screenshot of AMREN's own live site.
 */
export function LandingHeroVisual({ serviceSlug }: { serviceSlug: string }) {
  switch (serviceSlug) {
    case "google-ads":
      return <AdCampaignVisual platform="search" />;
    case "meta-ads":
      return <AdCampaignVisual platform="social" />;
    case "seo":
      return <SearchVisibilityVisual />;
    case "local-seo":
      return <LocalMapVisual />;
    case "social-media-marketing":
      return <ContentGridVisual label="AMREN-created examples" />;
    case "content-creation":
      return <ContentGridVisual label="AMREN-created examples" />;
    case "video-production":
      return <VideoFrameVisual />;
    case "marketing-automation":
      return <WorkflowVisual />;
    case "web-design-development":
      return <RealWorkVisual />;
    default:
      return null;
  }
}
