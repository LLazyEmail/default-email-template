# Default Email Templates

### yarn add javascript-email-templates

So, i'm continuing to separate code into different and independent pieces.
I also want to test our code with different settings/environment.

here we exporting 3 templates at this moment. you can install it and use for your simple nodejs/nodemailer project.
```
 emailOne
 emailTwo    
 emailThree
```


HTML/CSS code from:
-  https://github.com/dudeonthehorse/normalize.email.css
- http://htmlemailboilerplate.com/
 https://github.com/seanpowell/Email-Boilerplate
- https://github.com/g13nn/Email-Framework


First version of "renderer" from https://github.com/revivek/oy/blob/master/src/utils/HTML4.js


Checkout other repositories, related to emails
- https://github.com/atherdon/markdown-to-email
- https://github.com/LLazyEmail/free-email-templates-to-try


## Story behind building it

A story about the need for a [default email template package](https://github.com/LLazyEmail/default-email-template).
From novice developers to experienced ones, most are involved in sending emails programmatically. Sending emails is like building forms: most of the developers involved in building the web did it.

- If you are learning nodeJS, then you probably used nodemailer.
- If you are building your product, I bet you are thinking about connecting your code with SendGrid or MailGun and sending some transactional emails.
- If you are trying to make that sign-up form work and send confirmation emails -> I hear you.

We have a lot of resources and simple tutorials online that might help you to do such basic things. It is cool that you can read some tutorials, install a few packages and go! 

Even starting with some SAAS boilerplate that removes the first configuration steps and gives you a great jumpstart for your ideas.

Now you can send your empty email with "Hello world" from your server and be happy when it is delivered to your inbox. And this is where most developers feel that everything is great and stop doing more.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j75251dyexl69wltd3m0.png)

And while my module is written in JS, I don't think that it is a hard task to convert it into other languages if someone wants to contribute -> feel free to jump abroad. I’m always friendly to contributors' pull requests.


Ok, let's try to imagine that you are building your email-related functionality, related to emails from scratch -- you will try to organize email messages in a separate folder, maybe even make it translatable into multi-languages, testing your ability to render it with variables received from other sources...


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0wyf5qjj04719a7svvq.png)
 

But you will probably never try to send an email with a full template from the beginning.

**But you should do it.** 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a99g4067ltz8jqzao2ay.png)


There are a lot of important questions that you have to ask yourself.
_Does your email template is good and render all necessary thoughts?_
_What about images? Do you have a folder with images that is available from outside?_
_Are all permissions set correctly? (Ie. not only your logo must be visible)_
_What about links?_
_What about supporting different email clients? (Yes there is not only your email app that you update frequently.)_
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mhrexk9s1f5jsyk4o1dz.png)
 

Some people use Thunderbird and it disables image rendering by default (just to let you know). 

All those things might crash your email. Plus, it’s an old HTML4 code, so everything is so fragile.


I was trying to solve our inner coding problem a few months ago. We had an issue with making email templates to be precise --> we split them into partials, but I still didn't like what my stomach was telling me about manipulating with markup emails.

But that is a story for another article. And it was time for me to be inspired by other developers.

I reviewed a few repositories during one night. I found a few basic, but interesting solutions.

While our render method was working well for our needs -> it didn't give you this feeling of quickly understanding what your code is doing.

We didn't have it.

So I saved links and copied a few methods into temporary files.

It was not enough, especially as our problem was not gone anyway. At that moment I realized that a lot of projects might have similar issues. Imagine this situation: you have your monolith application and you need to send a test email via your Email Transport provider.

And sending a few blank emails with 2 lines is not enough either. We all need a quick and easy way to do it properly without additional knowledge. One of the best ways is to use a predefined working solution. So I decided to make it an open JS module and easy to use for everyone.

And I created two repositories for that :)

The first repository contains 3 files. And it's easy to read. Just a long string aka literal with an email template inside.

What's good about this repository is that you can install it via npm, use it a few times, while debugging your project, and then delete it.

like `yarn add javascript-email-templates` and just use one or a few templates imported.

Or you can use a statement like,

```
if(NODE_ENV == 'production') {
	// send a test email to an admin
}
```

and it will work for a lot of cases

The second repository can be more interesting.

Basically, I copy-pasted a render method from other repositories. Yes, they has "free to use and modify" license.

I want to extend and isolate that render method, so it can be an independent package, suit our project needs and be easy to customize, if necessary (there is always a need to customize things. you can't make it work from the first shot).

Show some love if you want more articles like this one! any activity will be appreciated.
