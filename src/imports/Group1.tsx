import svgPaths from "./svg-t4eik94b2c";
import img38Ad2Bb0A23F458E99DbDac8Ee1A6B6911 from "figma:asset/5b2dc20b3c21ea5f9101f8d1653617ea82a3ab95.png";
import imgImage2 from "figma:asset/61aaded678b9a18e1bbb361175ebea883a930360.png";
import imgImage1 from "figma:asset/cf9eaac39a54901e467db2406bf9ed22aeb73e4f.png";
import imgImage3 from "figma:asset/76f9e04c107cd9f4d5ff1dc444af5dce3601138f.png";
import imgImage4 from "figma:asset/cd8dd60cb6b16800bfdc727675dcd1e1b7116e28.png";
import imgImage6 from "figma:asset/d08d04ac39ca645ba2d95b184d4ed4f03bf875cf.png";
import imgImage5 from "figma:asset/1809702a116c1e1441de614eb128d7d094dd9641.png";
import imgImage7 from "figma:asset/05592b4f2dd14a2100da275f46dbeab546357cba.png";
import imgRectangle from "figma:asset/29498084082773063311cd3a295bde9049674504.png";

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Home</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">About Us</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Nav Link Dropdown">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Our Services</p>
      <ChevronDown />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[102px]" data-name="Link">
      <NavLinkDropdown />
    </div>
  );
}

function Column() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[calc(62.5%+93px)] top-[24px]" data-name="Column">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-white h-[73px] left-0 overflow-clip top-0 w-[1440px]" data-name="navbar">
      <Column />
      <div className="absolute bg-black content-stretch flex items-center justify-center left-[calc(87.5%+68px)] px-[20px] py-[8px] top-[16px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Join</p>
      </div>
      <p className="absolute font-['Cardillac:Medium',sans-serif] leading-[1.5] left-[calc(6.25%-64px)] not-italic text-[22px] text-black top-[20px] tracking-[1.32px] whitespace-nowrap">AUOR</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[160px] not-italic text-white top-[250px] w-[560px]" data-name="Content">
      <div className="font-['Helvetica:Bold',sans-serif] leading-[0] min-w-full relative shrink-0 text-[56px] tracking-[-3.92px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.2] mb-0">{`Elevate                        `}</p>
        <p className="leading-[1.2] mb-0">{`Your                  Brand                     with                  `}</p>
        <p className="leading-[1.2]">{`Tailored    Strategies`}</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.48px] w-[402px]">{`At AUOR Studio, we specialize in transforming fashion narratives into compelling stories that resonate. Our expert team is dedicated to crafting unique experiences that elevate your brand's presence in the market.`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white blur-[0px] h-[900px] left-0 overflow-clip top-[81px] w-[1440px]">
      <div className="absolute h-[1098px] left-0 pointer-events-none top-[-1px] w-[1756px]" data-name="38ad2bb0-a23f-458e-99db-dac8ee1a6b69 (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={img38Ad2Bb0A23F458E99DbDac8Ee1A6B6911} />
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0" />
      </div>
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-start left-[720px] not-italic text-white top-[272px] w-[600px]" data-name="Content">
      <div className="font-['Helvetica:Bold',sans-serif] leading-[0] min-w-full relative shrink-0 text-[56px] tracking-[-3.92px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.2] mb-0">{`Crafting Stories    through `}</p>
        <p className="leading-[1.2]">{`                   Fashion and PR`}</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[100px] leading-[1.5] right-[4px] text-[18px] text-right top-[177px] tracking-[-0.54px] w-[441px]">At AUOR Studio, we blend creativity with strategy to elevate brands. Our agency reel captures the essence of our innovative projects and collaborations.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#0a0909] h-[864px] left-0 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[981px] w-[1440px]">
      <div className="absolute left-[322px] size-[372px] top-[479px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-exclusion object-contain pointer-events-none size-full" src={imgImage2} />
      </div>
      <Content1 />
      <div className="absolute left-[36px] size-[375px] top-[74px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-difference object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute left-[1096px] top-[588px]" data-name="Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[12px] relative rounded-[inherit]">
          <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Watch</p>
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[1235px] overflow-clip top-[600px]" data-name="Button">
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-gradient-to-t from-[#706565] h-[355px] left-0 overflow-clip to-[#0a0909] to-[79.155%] top-[1845px] via-[#3d3737] via-[39.577%] w-[1440px]">
      <p className="-translate-x-1/2 absolute font-['Helvetica:Bold',sans-serif] leading-[1.5] left-[calc(20%+432px)] not-italic text-[24px] text-center text-white top-[245px] tracking-[-1.68px] w-[560px]">Trusted by top brands in the Fashion Industry</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.85%_2.98%_1.42%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 29.3">
        <g id="Group">
          <path d={svgPaths.p3f2fb500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p10f65300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2844b480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35705f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2903c100} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Missjologo9Da27D0D25Ef442B980D82C40E9C39Ac() {
  return (
    <div className="h-[30.2px] overflow-clip relative w-[141.2px]" data-name="missjologo_9da27d0d-25ef-442b-980d-82c40e9c39ac 1">
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-gradient-to-t from-[#706565] h-[356.134px] overflow-clip relative to-[#0a0909] to-[79.155%] via-[#3d3737] via-[39.577%] w-[1439.72px]">
      <div className="absolute flex h-[67.236px] items-center justify-center left-[997.76px] top-[260.44px] w-[150.105px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-179.91deg]">
          <div className="h-[67px] relative w-[150px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[30.422px] items-center justify-center left-[649.62px] top-[262.69px] w-[141.247px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-179.91deg]">
          <Missjologo9Da27D0D25Ef442B980D82C40E9C39Ac />
        </div>
      </div>
      <div className="absolute flex h-[66.398px] items-center justify-center left-[254.79px] top-[244.27px] w-[253.104px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-179.91deg]">
          <div className="h-[66px] relative w-[253px]" data-name="image 4">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[217px] py-[41px] right-[211px] top-[14px] w-[1147px]">
      <p className="col-1 font-['Helvetica:Bold',sans-serif] leading-[1.2] not-italic relative row-1 self-start shrink-0 text-[56px] text-white tracking-[-3.92px] w-[1125px]">{`Comprehensive PR Solutions Tailored for Your Fashion Brand's Unique Story`}</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full">{`Engaging Influencer Marketing Strategies to Amplify Your Brand's Voice`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.48px] w-full">{`Our PR services elevate your brand's presence in the competitive fashion landscape.`}</p>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Learn More</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[82px] top-[786px] w-[394.667px]" data-name="Content">
      <Content3 />
      <Action />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full">{`Stunning Photoshoots That Capture Your Brand's Essence and Vision`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.48px] w-full">{`We create captivating visuals that tell your brand's story authentically.`}</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[523px] top-[786px] w-[394.667px]" data-name="Content">
      <Content5 />
      <Action1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[24px] w-full">Memorable Experiential Events That Leave a Lasting Impression on Audiences</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.48px] w-full">Our events engage and inspire, creating unforgettable experiences for your audience.</p>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Action">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Join</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_right">
          <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69159 11.6166">
              <path d={svgPaths.p36daa800} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[987px] top-[786px] w-[394.667px]" data-name="Content">
      <Content7 />
      <Action2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-gradient-to-b from-black h-[1137px] left-0 overflow-clip to-[#0a0909] top-[2548px] w-[1440px]">
      <Frame6 />
      <div className="absolute left-[544px] size-[352px] top-[380px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[352px] left-[82px] top-[380px] w-[395px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute left-[1008px] size-[352px] top-[380px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <Content2 />
      <Content4 />
      <Content6 />
    </div>
  );
}

function Content8() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(20%+48px)] max-w-[768px] overflow-clip top-[238px] w-[768px]" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.4] not-italic relative shrink-0 text-[24px] text-center text-white w-full">{`"AUOR Studio transformed our brand's narrative, elevating our presence in the fashion industry like never before."`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-gradient-to-t from-[#706565] h-[355px] left-0 overflow-clip to-[#0a0909] to-[79.155%] top-[3685px] via-[#3d3737] via-[39.577%] w-[1440px]">
      <Content8 />
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.5] relative shrink-0 text-[16px] text-center text-white w-full" data-name="Avatar Content">
      <p className="font-['Helvetica_Light:Regular',sans-serif] not-italic relative shrink-0 w-full">Tomsy Thomas</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        CEO, Fashionista Co.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col items-center relative w-[300px]" data-name="Avatar">
      <AvatarContent />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-gradient-to-t from-[#706565] h-[356.134px] overflow-clip relative to-[#0a0909] to-[79.155%] via-[#3d3737] via-[39.577%] w-[1439.72px]">
      <div className="absolute flex h-[48.472px] items-center justify-center left-[598.04px] top-[104.08px] w-[300.075px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none rotate-[-179.91deg]">
          <Avatar />
        </div>
      </div>
      <div className="absolute flex h-[116.26px] items-center justify-center left-[665.82px] top-[178.18px] w-[165.183px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-179.91deg]">
          <div className="h-[116px] relative rounded-[78px] shadow-[0px_4px_0px_-29px_rgba(0,0,0,0.25)] w-[165px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[78px] size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#0a0909] h-[546px] left-0 overflow-clip top-[4382px] w-[1440px]">
      <p className="absolute font-['Helvetica:Bold',sans-serif] leading-[1.2] left-[424px] not-italic text-[56px] text-white top-[162px] tracking-[-3.92px] w-[768px]">Elevate Your Brand Today</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[373px] not-italic right-[373px] text-[16px] text-white top-[250px] tracking-[-0.48px]">Partner with us to craft compelling stories that resonate and engage your audience effectively.</p>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[587px] px-[24px] py-[12px] top-[336px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Work</p>
      </div>
      <div className="absolute content-stretch flex items-center justify-center left-[757px] px-[24px] py-[12px] top-[336px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Explore</p>
      </div>
      <div className="absolute h-0 left-[99px] top-[496px] w-[1280px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[99px] top-[41px] w-[1280px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[33px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <p className="absolute font-['KENAO:Regular',sans-serif] leading-[1.5] left-[calc(50%-79px)] not-italic text-[#f5f5f5] text-[22px] top-0 tracking-[1.32px] whitespace-nowrap">AUOR</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Our Work</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">About Us</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Contact</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Events</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Collaborations</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full">Quick Links</p>
      <FooterLinks />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Instagram</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Twitter</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">LinkedIn</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Facebook</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">YouTube</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">Stay Connected</p>
      <FooterLinks1 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Sign Up</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Latest News</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">New Arrivals</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Special Offers</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">Feedback</p>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative" data-name="Column">
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">Newsletter</p>
      <FooterLinks2 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px min-w-px relative" data-name="Links">
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Light:Regular',sans-serif] gap-[16px] items-start leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full" data-name="Col">
      <p className="relative shrink-0 w-full">Subscribe</p>
      <p className="relative shrink-0 w-full">Join our newsletter for the latest updates and exclusive offers.</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text input">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative w-full">
            <p className="flex-[1_0_0] font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Your Email Here</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none" />
        <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Subscribe</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <p className="font-['Helvetica_Light:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Col />
      <Actions />
    </div>
  );
}

function Content9() {
  return (
    <div className="absolute content-stretch flex gap-[128px] items-start left-[97px] top-[93px] w-[1280px]" data-name="Content">
      <Links />
      <Newslatter />
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex font-['Helvetica_Light:Regular',sans-serif] gap-[24px] items-center leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-name="Credits">
      <p className="relative shrink-0">© 2024 AUOR Studio. All rights reserved.</p>
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Terms of Use</p>
      <p className="relative shrink-0">Cookie Policy</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Facebook">
        <div className="absolute inset-[9.34%_8.33%_7.32%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2c56c980} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p9b0b480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="X">
        <div className="absolute inset-[17.68%_12.5%_15.66%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.pd265900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LinkedIn">
        <div className="absolute inset-[13.51%_12.5%_11.49%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p56afe80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Youtube">
        <div className="absolute inset-[20.83%_8.33%_20.78%_8.27%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0141 14.012">
            <path d={svgPaths.p1fcc3d80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Credits1 />
      <SocialLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[97px] top-[421px] w-[1280px]" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, white)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[#0a0909] h-[570px] left-0 overflow-clip top-[4925px] w-[1440px]">
      <Content9 />
      <Credits />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Navbar />
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="absolute flex h-[358.401px] items-center justify-center left-0 top-[2197.73px] w-[1440.279px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "63" } as React.CSSProperties}>
        <div className="flex-none rotate-[179.91deg]">
          <Frame3 />
        </div>
      </div>
      <Frame4 />
      <Frame5 />
      <div className="absolute flex h-[358.401px] items-center justify-center left-0 top-[4032px] w-[1440.279px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "63" } as React.CSSProperties}>
        <div className="flex-none rotate-[179.91deg]">
          <Frame7 />
        </div>
      </div>
      <Frame8 />
      <Frame9 />
    </div>
  );
}