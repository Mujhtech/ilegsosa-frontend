import React from "react";
import {
  styled638,
  don_t_miss_our_weekly_updates_about_ilegrams_alumni_story,
  title,
  enter_your_email_address,
  input_field,
  subscribe,
  subscribe_btn,
  subscribe1,
  newsletter,
  newsletter_section_wrapper,
} from "./NewsletterSection.module.css";

function NewsletterSection() {
  return (
    <div className={newsletter_section_wrapper}>
      <img src="/images/frame-20.svg" className={styled638} />
      <div className={newsletter}>
        <div className={title}>
          <span
            className={
              don_t_miss_our_weekly_updates_about_ilegrams_alumni_story
            }
          >{`Don’t miss our weekly updates about
Ilegrams alumni story`}</span>
        </div>
        <div className={subscribe1}>
          <div className={input_field}>
            <span className={enter_your_email_address}>
              Enter your email address
            </span>
          </div>
          <div className={subscribe_btn}>
            <span className={subscribe}>SUBSCRIBE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
