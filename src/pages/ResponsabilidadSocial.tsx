import HeaderV3 from '../components/v3/HeaderV3'
import FooterV4 from '../components/v4/FooterV4'
import PageContainer from '../components/shared/PageContainer'
import AtheneaHero from '../components/impacto-social/AtheneaHero'
import ChallengeStats from '../components/impacto-social/ChallengeStats'
import WhyHappening from '../components/impacto-social/WhyHappening'
import DetectionFlow from '../components/impacto-social/DetectionFlow'
import OrbitalSteps from '../components/impacto-social/OrbitalSteps'
import InterventionsTimeline from '../components/impacto-social/InterventionsTimeline'
import ImpactClosing from '../components/impacto-social/ImpactClosing'

const ResponsabilidadSocial = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#EAF7FC] via-[#F6FBFE] to-white">
    <HeaderV3 />
    <AtheneaHero />
    <ChallengeStats />
    <WhyHappening />
    <DetectionFlow />

    <PageContainer>
      <div className="flex flex-col gap-20 lg:gap-28">
        <OrbitalSteps />
        <InterventionsTimeline />
      </div>
    </PageContainer>

    <ImpactClosing />
    <FooterV4 />
  </div>
)

export default ResponsabilidadSocial
