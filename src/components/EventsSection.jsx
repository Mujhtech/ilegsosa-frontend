import React from "react";
import {
  rectangle_653,
  featured_events,
  event_title,
  annual_meetup_scholarship_presentation,
  event_title_text,
  ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b3,
  event_venue_detail,
  frame_11,
  styled366,
  _301,
  days,
  days1,
  _14,
  hours,
  hours1,
  _36,
  minutes,
  minutes1,
  _43,
  seconds,
  seconds1,
  countdown,
  styled367,
  november_24th_2021,
  date3,
  register,
  register_cta,
  date_register,
  event_dets,
  event_detail_highlight,
  h2_section_title_3_sec_,
  styled368,
  next_link,
  event_toggle,
  layout,
  layout1,
  events_section_wrapper,
} from "./EventsSection.module.css";

function EventsSection() {
  return (
    <div className={events_section_wrapper}>
      <div className={rectangle_653} />
      <div className={layout1}>
        <div className={frame_11}>
          <div className={event_title}>
            <span className={featured_events}>FEATURED EVENTS</span>
          </div>
          <div className={event_title_text}>
            <span className={annual_meetup_scholarship_presentation}>
              Annual Meetup & Scholarship Presentation
            </span>
          </div>
          <div className={event_venue_detail}>
            <span
              className={
                ilegrams_old_students_association_secretariat_canon_j_a_akinyemi_b3
              }
            >
              Ilegrams Old Students' Association Secretariat, Canon J. A.
              Akinyemi Building, Ilesa Grammar School, P.O.Box 16, Ilesa, Osun
              State, Nigeria
            </span>
          </div>
        </div>
        <div className={layout}>
          <img src="/images/featured-image.svg" className={styled366} />
          <div className={event_toggle}>
            <div className={event_detail_highlight}>
              <div className={event_dets}>
                <div className={countdown}>
                  <div className={days1}>
                    <span className={_301}>30</span>
                    <span className={days}>Days</span>
                  </div>
                  <div className={hours1}>
                    <span className={_14}>14</span>
                    <span className={hours}>Hours</span>
                  </div>
                  <div className={minutes1}>
                    <span className={_36}>36</span>
                    <span className={minutes}>Minutes</span>
                  </div>
                  <div className={seconds1}>
                    <span className={_43}>43</span>
                    <span className={seconds}>Seconds</span>
                  </div>
                </div>
                <img src="/images/hr.svg" className={styled367} />
                <div className={date_register}>
                  <div className={date3}>
                    <span className={november_24th_2021}>
                      November 24th, 2021
                    </span>
                  </div>
                  <div className={register_cta}>
                    <span className={register}>Register</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={next_link}>
              <span className={h2_section_title_3_sec_}>Next Event</span>
              <img
                src="/images/ic-arrow-forward-18px-1.svg"
                className={styled368}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
