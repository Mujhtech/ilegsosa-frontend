import React from "react";
import Head from "next/head";
import {
  ilegs_alumni_heading,
  ilegs_alumni_section,
  styled703,
  icon,
  h3_feature_title_sec_,
  heading,
  styled704,
  paragraph_feature_description_sec_,
  paragraph,
  card,
  checking_message,
  styled705,
  icon1,
  h3_feature_title_sec_1,
  title1,
  styled706,
  paragraph_feature_description_sec_1,
  paragraph1,
  card1,
  update_info,
  styled707,
  icon2,
  h3_feature_title_sec_2,
  title2,
  styled708,
  paragraph_feature_description_sec_2,
  paragraph2,
  card2,
  join_alumnus,
  styled709,
  fixed_width_sec_,
  icon3,
  h3_feature_title_sec_3,
  title3,
  styled710,
  paragraph_feature_description_sec_3,
  paragraph3,
  search_alumni,
  cards,
  frame_12,
  alumni_section,
  events_section_wrapper1,
  h2_section_title_3_sec_1,
  styled711,
  h3_feature_title_sec_4,
  job_title,
  styled712,
  styled713,
  paragraph_feature_description_sec_4,
  portfolio,
  paragraph_feature_description_sec_5,
  job_detail,
  frame_13,
  h61,
  styled714,
  apply_btn,
  job_detail1,
  job_advert,
  career_opportunity_1,
  styled715,
  h3_feature_title_sec_5,
  title4,
  styled716,
  styled717,
  paragraph_feature_description_sec_6,
  company_info,
  paragraph_feature_description_sec_7,
  job_desctiption,
  frame_14,
  h62,
  styled718,
  apply_cta,
  job,
  job_dets,
  career_opportunity_2,
  styled719,
  h3_feature_title_sec_6,
  title5,
  styled720,
  styled721,
  paragraph_feature_description_sec_8,
  frame_16,
  paragraph_feature_description_sec_9,
  paragraph4,
  job1,
  h63,
  styled722,
  button_sm_sec_1,
  job_detsss,
  job_detail2,
  career_opportunity_3,
  career_opts,
  frame_17,
  view_more,
  give_cta1,
  frame_18,
  h2_section_title_3_sec_2,
  announcement_header,
  styled723,
  title_img,
  h5_price_sec_,
  date4,
  h5_product_title_1_sec_,
  title6,
  paragraph_product_description_sec_,
  excerpt,
  h64,
  styled724,
  button_sm_sec_2,
  frame_3,
  product_card,
  announcement1,
  styled725,
  img,
  h5_price_sec_1,
  date5,
  prices,
  h5_product_title_2_sec_,
  title7,
  paragraph_product_description_sec_1,
  excerpt1,
  h65,
  styled726,
  button_sm_sec_3,
  frame_31,
  product_card1,
  announcement_2,
  styled727,
  h5_price_sec_2,
  date6,
  h5_product_title_3_sec_,
  title8,
  paragraph_product_description_sec_2,
  excerpt2,
  h66,
  styled728,
  button_sm_sec_4,
  frame_32,
  product_card2,
  announcement_3,
  row,
  container,
  frame_19,
  anounce,
  announcement_section,
  h5,
  link,
  div,
  about_us,
  h51,
  link1,
  div1,
  alumni,
  h52,
  link2,
  div2,
  account,
  h53,
  styled729,
  h67,
  feature_item,
  styled730,
  h68,
  feature_item1,
  styled731,
  h69,
  feature_item2,
  div3,
  get_in_touch,
  row1,
  footer,
  footer_1,
  ilesa_grammar_school_old_student_association_all_right_reserved,
  col_md_7,
  row2,
  copyright_notice,
  follow_us,
  styled732,
  styled733,
  styled734,
  insta,
  follow_us1,
  footer_2,
  footer1,
  join1,
  login1,
  nav_links2,
  nav_links3,
  ilegrams_logo1,
  styled735,
  about1,
  membership1,
  our_organs1,
  announcement2,
  giving1,
  contact_us1,
  give_now1,
  give_cta2,
  frame_41,
  frame_51,
  nav_menu1,
  navigation1,
  ilesa_grammar_school_old_students_association1,
  find_your_career_opportunities_reconnect_and_stay_up_to_date1,
  the_premier_grammar_school_the_school_that_has_produced_some_of_the_f1,
  h610,
  styled736,
  button_sm_sec_5,
  content1,
  styled737,
  frame_61,
  _241,
  november3,
  date7,
  upcoming_events3,
  event_caption3,
  ilegrams_88th_anniversary3,
  event_heading3,
  ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b4,
  event_body3,
  event3,
  frame_71,
  styled738,
  _281,
  november4,
  date8,
  upcoming_events4,
  event_caption4,
  ilegrams_88th_anniversary4,
  event_heading4,
  ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b5,
  event_body4,
  event4,
  frame_81,
  styled739,
  _302,
  november5,
  date9,
  upcoming_events5,
  event_caption5,
  ilegrams_88th_anniversary5,
  event_heading5,
  ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b6,
  event_body5,
  event5,
  frame_91,
  frame_101,
  hero_section1,
  newsletter_section_wrapper1,
  home_wrapper,
} from "./home.module.css";
import EventsSection from "src/components/EventsSection";
import Chevron from "src/components/Chevron";
import NewsletterSection from "src/components/NewsletterSection";

function Home() {
  return (
    <>
      <Head>
        <title>{`Home`}</title>
      </Head>
      <div className={home_wrapper}>
        <div className={alumni_section}>
          <div className={frame_12}>
            <div className={ilegs_alumni_section}>
              <span
                className={ilegs_alumni_heading}
              >{`My Ilegrams Alumni Dashboard`}</span>
            </div>
            <div className={cards}>
              <div className={checking_message}>
                <div className={card}>
                  <div className={icon}>
                    <img
                      src={"/images/icon-cool-icon-n8.svg"}
                      className={styled703}
                    />
                  </div>
                  <div className={heading}>
                    <span
                      className={h3_feature_title_sec_}
                    >{`Checking Message`}</span>
                  </div>
                  <img src={"/images/hr1.svg"} className={styled704} />
                  <div className={paragraph}>
                    <span
                      className={paragraph_feature_description_sec_}
                    >{`Ilegrams Alunmi message portal. Receive, send, compose and edit messages`}</span>
                  </div>
                </div>
              </div>
              <div className={update_info}>
                <div className={card1}>
                  <div className={icon1}>
                    <img
                      src={"/images/icon-cool-icon-n8.svg"}
                      className={styled705}
                    />
                  </div>
                  <div className={title1}>
                    <span
                      className={h3_feature_title_sec_1}
                    >{`Update My Information`}</span>
                  </div>
                  <img src={"/images/hr2.svg"} className={styled706} />
                  <div className={paragraph1}>
                    <span
                      className={paragraph_feature_description_sec_1}
                    >{`Edit your Biography, name, contact details, email address and other important information.`}</span>
                  </div>
                </div>
              </div>
              <div className={join_alumnus}>
                <div className={card2}>
                  <div className={icon2}>
                    <img
                      src={"/images/icon-cool-icon-n8.svg"}
                      className={styled707}
                    />
                  </div>
                  <div className={title2}>
                    <span
                      className={h3_feature_title_sec_2}
                    >{`Join with Alumni Forum`}</span>
                  </div>
                  <img src={"/images/hr2.svg"} className={styled708} />
                  <div className={paragraph2}>
                    <span
                      className={paragraph_feature_description_sec_2}
                    >{`Interact with fellow fellow Ilegrams Alumni and share interesting stories and moments together`}</span>
                  </div>
                </div>
              </div>
              <div className={search_alumni}>
                <div className={icon3}>
                  <div className={fixed_width_sec_}>
                    <img
                      src={"/images/icon-cool-icon-n8.svg"}
                      className={styled709}
                    />
                  </div>
                </div>
                <div className={title3}>
                  <span
                    className={h3_feature_title_sec_3}
                  >{`Search Alumni Directory`}</span>
                </div>
                <img src={"/images/hr1.svg"} className={styled710} />
                <div className={paragraph3}>
                  <span
                    className={paragraph_feature_description_sec_3}
                  >{`Meet several fellow Ilegrams Alumni, connect through their contacts and profile`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={events_section_wrapper1}>
          <EventsSection />
        </div>
        <div className={frame_18}>
          <div className={frame_17}>
            <span
              className={h2_section_title_3_sec_1}
            >{`Career Opportunity`}</span>
            <div className={career_opts}>
              <div className={career_opportunity_1}>
                <div className={job_advert}>
                  <img src={"/images/img.svg"} className={styled711} />
                  <div className={job_detail1}>
                    <div className={frame_13}>
                      <div className={job_title}>
                        <span
                          className={h3_feature_title_sec_4}
                        >{`Senior Civil/Structural Engineer`}</span>
                      </div>
                      <img src={"/images/hr3.svg"} className={styled712} />
                      <div className={portfolio}>
                        <img src={"/images/icon.svg"} className={styled713} />
                        <span
                          className={paragraph_feature_description_sec_4}
                        >{`COREN/NSE  Lagos, Nigeria`}</span>
                      </div>
                      <div className={job_detail}>
                        <span
                          className={paragraph_feature_description_sec_5}
                        >{`Preparing reports, designs and drawings Making calculations about loads and stresses Selecting appropriate construction materials Providing technical advice`}</span>
                      </div>
                    </div>
                    <div className={apply_btn}>
                      <span className={h61 + ` h6`}>{`Apply Now`}</span>
                      <img
                        src={"/images/icn-arrow-right-icn-xs.svg"}
                        className={styled714}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={career_opportunity_2}>
                <div className={job_dets}>
                  <img src={"/images/img1.svg"} className={styled715} />
                  <div className={job}>
                    <div className={frame_14}>
                      <div className={title4}>
                        <span
                          className={h3_feature_title_sec_5}
                        >{`Head, Digital Banking`}</span>
                      </div>
                      <img src={"/images/hr3.svg"} className={styled716} />
                      <div className={company_info}>
                        <img src={"/images/icon.svg"} className={styled717} />
                        <span
                          className={paragraph_feature_description_sec_6}
                        >{`DIGITAL BANK  Lagos, Nigeria`}</span>
                      </div>
                      <div className={job_desctiption}>
                        <span
                          className={paragraph_feature_description_sec_7}
                        >{`Implement Alternate Delivery Channels strategies for all customer segments to achieve effective channel use, sales and customer satisfaction targets`}</span>
                      </div>
                    </div>
                    <div className={apply_cta}>
                      <span className={h62 + ` h6`}>{`Apply Now`}</span>
                      <img
                        src={"/images/icn-arrow-right-icn-xs.svg"}
                        className={styled718}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={career_opportunity_3}>
                <div className={job_detail2}>
                  <img src={"/images/img2.svg"} className={styled719} />
                  <div className={job_detsss}>
                    <div className={job1}>
                      <div className={title5}>
                        <span
                          className={h3_feature_title_sec_6}
                        >{`Entrepreneurship Faculty`}</span>
                      </div>
                      <img src={"/images/hr3.svg"} className={styled720} />
                      <div className={frame_16}>
                        <img src={"/images/icon.svg"} className={styled721} />
                        <span
                          className={paragraph_feature_description_sec_8}
                        >{`EDU UNI  Osun, Nigeria`}</span>
                      </div>
                      <div className={paragraph4}>
                        <span
                          className={paragraph_feature_description_sec_9}
                        >{`As the most innovative company in Africa, our purpose is to catalyze change in Africa and around the world by building the world’s most innovative university. `}</span>
                      </div>
                    </div>
                    <div className={button_sm_sec_1}>
                      <span className={h63 + ` h6`}>{`Apply Now`}</span>
                      <img
                        src={"/images/icn-arrow-right-icn-xs.svg"}
                        className={styled722}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={give_cta1}>
            <span className={view_more}>{`View More`}</span>
          </div>
        </div>
        <div className={announcement_section}>
          <div className={anounce}>
            <Chevron />
            <div className={frame_19}>
              <div className={announcement_header}>
                <span
                  className={h2_section_title_3_sec_2}
                >{`Announcements`}</span>
              </div>
              <div className={container}>
                <div className={row}>
                  <div className={announcement1}>
                    <div className={product_card}>
                      <div className={title_img}>
                        <img
                          src={"/images/product-cover-124-sec.svg"}
                          className={styled723}
                        />
                      </div>
                      <div className={frame_3}>
                        <div className={date4}>
                          <span
                            className={h5_price_sec_ + ` h5`}
                          >{`August 5, 2019`}</span>
                        </div>
                        <div className={title6}>
                          <span
                            className={h5_product_title_1_sec_}
                          >{`ILESA GRAMMAR SCHOOL OLD STUDENTS’ ASSOCIATION PRESS STATEMENT: ON OPENING OF ‘ILESA GOVERNMENT HIGH SCHOOL, ILESA’`}</span>
                        </div>
                        <div className={excerpt}>
                          <span
                            className={paragraph_product_description_sec_}
                          >{`The Ilesa Grammar School Old Students’ Association (ILEGSOSA) acknowledges receipt of a letter from the Osun State Government, through the Permanent Secretary, Ministry of Education, inviting the body of Old Students Association of Ilesa Grammar School as...`}</span>
                        </div>
                        <div className={button_sm_sec_2}>
                          <span className={h64 + ` h6`}>{`Learn More`}</span>
                          <img
                            src={"/images/icn-arrow-right-icn-xs1.svg"}
                            className={styled724}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={announcement_2}>
                    <div className={product_card1}>
                      <div className={img}>
                        <img
                          src={"/images/product-cover-125-sec.svg"}
                          className={styled725}
                        />
                      </div>
                      <div className={frame_31}>
                        <div className={prices}>
                          <div className={date5}>
                            <span
                              className={h5_price_sec_1 + ` h5`}
                            >{`October 30, 2021`}</span>
                          </div>
                        </div>
                        <div className={title7}>
                          <span
                            className={h5_product_title_2_sec_}
                          >{`QUICK RESPONSE TO DR. BOLUPE AWE’S LETTER BY THE NATIONAL PRESIDENT ILEGSOSA, DR. OBI DARAMOLA.`}</span>
                        </div>
                        <div className={excerpt1}>
                          <span
                            className={paragraph_product_description_sec_1}
                          >{`I just want to make quick remarks on my brother’s , Bolupe Awe’s letter to Governor Oyetola. Mainly, this is to calm us and to guide our reactions`}</span>
                        </div>
                        <div className={button_sm_sec_3}>
                          <span className={h65 + ` h6`}>{`Learn More`}</span>
                          <img
                            src={"/images/icn-arrow-right-icn-xs1.svg"}
                            className={styled726}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={announcement_3}>
                    <div className={product_card2}>
                      <img src={"/images/img3.svg"} className={styled727} />
                      <div className={frame_32}>
                        <div className={date6}>
                          <span
                            className={h5_price_sec_2 + ` h5`}
                          >{`November 3, 2021`}</span>
                        </div>
                        <div className={title8}>
                          <span
                            className={h5_product_title_3_sec_}
                          >{`CLASS OF ’15 REUNION`}</span>
                        </div>
                        <div className={excerpt2}>
                          <span
                            className={paragraph_product_description_sec_2}
                          >{`We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.`}</span>
                        </div>
                        <div className={button_sm_sec_4}>
                          <span className={h66 + ` h6`}>{`Learn More`}</span>
                          <img
                            src={"/images/icn-arrow-right-icn-xs1.svg"}
                            className={styled728}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Chevron />
          </div>
        </div>
        <div className={footer1}>
          <div className={footer_1}>
            <div className={footer}>
              <div className={row1}>
                <div className={about_us}>
                  <span className={h5}>{`ABOUT US`}</span>
                  <div className={div}>
                    <span className={link + ` link`}>{`DIRECTORY
EVENTS
CONTACTS
GALLERY
NEWS`}</span>
                  </div>
                </div>
                <div className={alumni}>
                  <span className={h51}>{`ALUMNI`}</span>
                  <div className={div1}>
                    <span className={link1 + ` link`}>{`CAREER
APPLY TO JOB`}</span>
                  </div>
                </div>
                <div className={account}>
                  <span className={h52}>{`ACCOUNT`}</span>
                  <div className={div2}>
                    <span className={link2 + ` link`}>{`PROFILE
PASSWORD
DOWNLOADS`}</span>
                  </div>
                </div>
                <div className={get_in_touch}>
                  <span className={h53 + ` h5`}>{`Get In Touch`}</span>
                  <div className={div3}>
                    <div className={feature_item}>
                      <img
                        src={"/images/bx-bx-phone.svg"}
                        className={styled729}
                      />
                      <span
                        className={h67 + ` h6`}
                      >{`+234 806 662 2754, +234 706 526 0752`}</span>
                    </div>
                    <div className={feature_item1}>
                      <img
                        src={"/images/bx-bx-map.svg"}
                        className={styled730}
                      />
                      <span
                        className={h68 + ` h6`}
                      >{`Ilegrams Old Students' Association Secretariat, Canon J. A. Akinyemi Building, Ilesa Grammar School, P.O.Box 16, Ilesa, Osun State, Nigeria`}</span>
                    </div>
                    <div className={feature_item2}>
                      <img
                        src={"/images/carbon-send-alt.svg"}
                        className={styled731}
                      />
                      <span
                        className={h69 + ` h6`}
                      >{` info@ilegramsalumni.org`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={footer_2}>
            <div className={copyright_notice}>
              <div className={row2}>
                <div className={col_md_7}>
                  <span
                    className={
                      ilesa_grammar_school_old_student_association_all_right_reserved
                    }
                  >{`Ilesa Grammar School Old Student Association  - All Right Reserved `}</span>
                </div>
              </div>
            </div>
            <div className={follow_us1}>
              <span className={follow_us}>{`FOLLOW US`}</span>
              <img src={"/images/frame-21.svg"} className={styled732} />
              <img src={"/images/twitter.svg"} className={styled733} />
              <div className={insta}>
                <img src={"/images/insta.svg"} className={styled734} />
              </div>
            </div>
          </div>
        </div>
        <div className={hero_section1}>
          <div className={navigation1}>
            <div className={nav_links3}>
              <div className={nav_links2}>
                <span className={join1}>{`Join`}</span>
                <span className={login1}>{`Login`}</span>
              </div>
            </div>
            <div className={nav_menu1}>
              <img
                src={"/images/ilegrams-logo.jpg"}
                className={ilegrams_logo1}
              />
              <div className={frame_51}>
                <img src={"/images/nav-line.svg"} className={styled735} />
                <div className={frame_41}>
                  <span className={about1}>{`About`}</span>
                  <span className={membership1}>{`Membership `}</span>
                  <span className={our_organs1}>{`Our Organs`}</span>
                  <span className={announcement2}>{`Announcement`}</span>
                  <span className={giving1}>{`Giving`}</span>
                  <span className={contact_us1}>{`Contact Us`}</span>
                  <div className={give_cta2}>
                    <span className={give_now1}>{`Give Now`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={frame_61}>
            <div className={content1}>
              <span
                className={ilesa_grammar_school_old_students_association1}
              >{`Ilesa Grammar School Old Students' Association`}</span>
              <span
                className={
                  find_your_career_opportunities_reconnect_and_stay_up_to_date1
                }
              >{`Find your career
opportunities, reconnect
and stay up to date`}</span>
              <span
                className={
                  the_premier_grammar_school_the_school_that_has_produced_some_of_the_f1
                }
              >{`The premier grammar school, the school that has produced some of the finest people ruling the roost in different sectors of the economy in Nigeria and beyond, one of the more beautiful public schools around, the oldest secondary school in Ijesaland and second oldest in Osun State.`}</span>
              <div className={button_sm_sec_5}>
                <span className={h610 + ` h6`}>{`Learn More`}</span>
                <img
                  src={"/images/icn-arrow-right-icn-xs.svg"}
                  className={styled736}
                />
              </div>
            </div>
            <img src={"/images/ilegrams-home-bg.svg"} className={styled737} />
          </div>
          <div className={frame_101}>
            <div className={frame_71}>
              <div className={date7}>
                <span className={_241}>{`24`}</span>
                <span className={november3}>{`November`}</span>
              </div>
              <div className={event3}>
                <div className={event_caption3}>
                  <span className={upcoming_events3}>{`UPCOMING EVENTS`}</span>
                </div>
                <div className={event_heading3}>
                  <span
                    className={ilegrams_88th_anniversary3}
                  >{`ILEGRAMS 88TH ANNIVERSARY`}</span>
                </div>
                <div className={event_body3}>
                  <span
                    className={
                      ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b4
                    }
                  >{`Ilegrams Old Students' Association Secretariat, Canon J. A. Akinyemi Building, Ilesa Grammar School, P.O.Box 16, Ilesa, Osun State, Nigeria`}</span>
                </div>
              </div>
            </div>
            <img src={"/images/vertical-line.svg"} className={styled738} />
            <div className={frame_81}>
              <div className={date8}>
                <span className={_281}>{`28`}</span>
                <span className={november4}>{`November`}</span>
              </div>
              <div className={event4}>
                <div className={event_caption4}>
                  <span className={upcoming_events4}>{`UPCOMING EVENTS`}</span>
                </div>
                <div className={event_heading4}>
                  <span
                    className={ilegrams_88th_anniversary4}
                  >{`ILEGRAMS 88TH ANNIVERSARY`}</span>
                </div>
                <div className={event_body4}>
                  <span
                    className={
                      ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b5
                    }
                  >{`Ilegrams Old Students' Association Secretariat, Canon J. A. Akinyemi Building, Ilesa Grammar School, P.O.Box 16, Ilesa, Osun State, Nigeria`}</span>
                </div>
              </div>
            </div>
            <img src={"/images/vertical-line.svg"} className={styled739} />
            <div className={frame_91}>
              <div className={date9}>
                <span className={_302}>{`30`}</span>
                <span className={november5}>{`November`}</span>
              </div>
              <div className={event5}>
                <div className={event_caption5}>
                  <span className={upcoming_events5}>{`UPCOMING EVENTS`}</span>
                </div>
                <div className={event_heading5}>
                  <span
                    className={ilegrams_88th_anniversary5}
                  >{`ILEGRAMS 88TH ANNIVERSARY`}</span>
                </div>
                <div className={event_body5}>
                  <span
                    className={
                      ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b6
                    }
                  >{`Ilegrams Old Students' Association Secretariat, Canon J. A. Akinyemi Building, Ilesa Grammar School, P.O.Box 16, Ilesa, Osun State, Nigeria`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={newsletter_section_wrapper1}>
          <NewsletterSection />
        </div>
      </div>
    </>
  );
}

export default Home;
