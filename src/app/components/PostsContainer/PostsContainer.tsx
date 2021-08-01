import React from 'react';
import { Posts } from 'app/components/Posts/Posts';
import { Divider } from '@material-ui/core';

export const PostsContainer = () => {
  return (
    <>
      <Posts
        votes="92"
        author="Martin Hope"
        title="Professional"
        postDate="April 19,2018"
        postIn=" Language"
        postQuestion="Is this statement, “i see him last night” can be understood as “I saw him last night”?"
        postAnswer=" In my local language (Bahasa Indonesia) there are no verb-2 or
        past tense form as time tracker. So, I often forget to use the         past form of verb when speaking english. I saw him last night
        (correct) I see him last night ..."
        commentTagsLang="english"
        postReview="4 Answers"
        postViews="1K Views"
        color="#6B3DE4"
      />
      <Divider />
      <Posts
        votes="29"
        author="Ahmed Hassan"
        title="Explainer"
        postDate="April 19,2018"
        postIn=" Language"
        postQuestion=" How do native speakers tell I’m foreign based on my English alone?"
        postAnswer=" I’m a 19-year-old student from Malaysia. I’ve been introduced to the language at a very young age and I’m capable of conducting any type of conversation. However, some of my English-speaking friends on the internet didn’t take too long to ..."
        commentTagsLang="english"
        postReview="3 Answers"
        postViews="1K Views"
        color="#30A96F"
      />
      <Divider />
      <Posts
        votes="38"
        author="Aaron Aiken"
        title="Enlightened"
        postDate="April 19,2018"
        postIn=" Language"
        postQuestion=" Why are the British confused about us calling bread rolls “biscuits” when they call bread rolls “puddings”?"
        postAnswer="(Why I darest say, they darest not get offended when they so indeed have examples that violate their own use and nomenclature!) IE: pudding as a specific dessert, puddings as a general term for desserts. Calling something a Yorkshire pudding ..."
        commentTagsLang="british"
        postReview="5 Answers"
        postViews="1K Views"
        color="#d9a34a"
      />
      <Divider />
      <Posts
        votes="10"
        author="Marko Smith"
        title="Professional"
        postDate="April 19,2018"
        postIn=" Analytics"
        postQuestion=" Google Analytics reads like a seismic chart lately"
        postAnswer="Anyone else seeing dramatic ranking shakeups lately? Thankfully, this client is the blue line, but that’s a serious drop and recovery. We don’t operate at all in the black hat world, so our links and content should be in good shape. ..."
        commentTagsLang="analytics"
        postReview="2 Answers"
        postViews="1K Views"
        color="#6B3DE4"
      />
      <Divider />
      <Posts
        votes="16"
        author="James Wane"
        title="Pundit"
        postDate="April 19,2018"
        postIn=" Analytics"
        postQuestion=" What are your thoughts on Google Analytics vs other analytics platforms?"
        postAnswer="Recently heard about Heap which seems pretty cool, but I’m not sure if it would really be valuable, or simply another tool that I need to check. We are not at the point of using HubSpot/Marketo yet so Heap’s free ."
        commentTagsLang="analytics"
        postReview="0 Answers"
        postViews="1K Views"
        color="#ffbf00"
      />
      <Divider />
      <Posts
        votes="13"
        author="Barry Carter"
        title="Enlightened"
        postDate="April 19,2018"
        postIn=" Company"
        postQuestion=" What is a nice way to end an interview that is clearly going badly?"
        postAnswer="As an interviewer, I occasionally conduct interviews that become painful as time goes on because the candidate is doing so poorly. I have the impression that, in these cases, the candidate internally knows they are not getting the job, and ..."
        commentTagsLang="company"
        postReview="3 Answers"
        postViews="1K Views"
        color="#d9a34a"
      />
      <Divider />
      <Posts
        votes="16"
        author="Ahmed Hassan"
        title="Explainer"
        postDate="April 19,2018"
        postIn=" Company"
        postQuestion="Does Google force employees who have offers from Facebook to leave immediately?"
        postAnswer="If a Google employee reveals that he or she intends to leave because they have *accepted*–not received–an offer from a talent competitor like Facebook, in some cases they will be “walked off” so that they will no longer have access ..."
        commentTagsLang="company"
        postReview="3 Answers"
        postViews="1K Views"
        color="#30a96f"
      />
      <Divider />
      <Posts
        votes="10"
        author="John Peter"
        title="Pundit"
        postDate="April 19,2018"
        postIn=" Language"
        postQuestion="Is there an English equivalent to the French expression: “il faut d’abord apprendre à marcher avant de courir”?"
        postAnswer="I know this means “one must learn to walk before running”, but is there a less literal translation that is perhaps more appealing to an English-speaking audience?"
        commentTagsLang="french"
        postReview="3 Answers"
        postViews="1K Views"
        color="#ffbf00"
      />
      <Divider />
      <Posts
        votes="13"
        author="Aaron Aiken"
        title="Enlightened"
        postDate="April 19,2018"
        postIn=" Management "
        postQuestion="I keep getting tasks that are above my skill level. How can I address this without coming accross as grossly incompetent?"
        postAnswer="I’m 6 months into a new job that uses a technology I’ve had no experience in (but am trying really hard to learn). Often I get tasks that I have real difficulty with. I flag this: I say that I’ve ..."
        commentTagsLang=""
        postReview="3 Answers"
        postViews="1K Views"
        color="#d9a34a"
      />
      <Divider />
      <Posts
        votes="14"
        author="Martin Hope"
        title="Professional"
        postDate="April 19,2018"
        postIn=" Management"
        postQuestion="Dealing with an employee that went over my head"
        postAnswer="I manage a small team and recently hired for a new position. In the job posting it clearly stated that the work hours are from 8:00-4:30. No concerns about these hours were mentioned during the interview process at all. Recently after ..."
        commentTagsLang="english"
        postReview="4 Answers"
        postViews="1K Views"
        color="#6b3de4"
      />
      <Divider />
      <Posts
        votes="19"
        author="Marko Smith"
        title="Professional"
        postDate="April 19,2018"
        postIn=" Programmers"
        postQuestion="How to approach applying for a job at a company owned by a friend?"
        postAnswer="A friend of mine is the CEO of his own small business. We’re not very close friends, but we know each other well enough to have visited each other’s houses for dinner and drinks a few times. His business is advertising ..."
        commentTagsLang="english"
        postReview="7 Answers"
        postViews="1K Views"
        color="#6b3de4"
      />
      <Divider />
    </>
  );
};
