# Email Maker

This is my little tool to help create html emails.

HTML email is literally writing HTML from the pre-CSS days. There are no divs, spans, classes, and IDs here. All layout must be done with tables and all styles must be added inline.

This tool allows you to use CSS, classes, and IDs to define and apply styles, but "inlines" them for the email markup. Additionally, it is built using [Nunjucks](https://mozilla.github.io/nunjucks/) for templating to save time if you're creating multiple emails.


## How to use this

1. Clone the repo `git clone https://github.com/rewdy/email-maker.git`
2. Using Terminal.app (or other shell), run `npm install` in the directory to download dependencies.
3. From the command line, gun `grunt`. This will start everything up so editing the sass files, layouts, and emails will result in the pages getting rendered.

Additional help if you needed: [installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [installing node](https://nodejs.org/en/download/), [installing grunt globally](https://gruntjs.com/getting-started)

## Resources

I like to test my emails using a service called [PutsMail](https://putsmail.com/tests/new). This site lets you enter addresses and paste in some HTML to test an email. Be sure to verify how it looks in Gmail (web and via the mobile apps), Outlook for Windows, and Outlook for Mac (and others, but those at minimum).

MailChimp has put together a really great [Design Guide](https://mailchimp.com/email-design-guide/). I have referenced it often.

If you're sending out marketing email, it's critical to understand and comply with the CAN-SPAM act: [FTC's Compliance Gude](https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business), [CAN-SPAM on Wikipedia](https://en.wikipedia.org/wiki/CAN-SPAM_Act_of_2003).

Finally, MailChimp also has a great article on [avoiding being marked as SPAM](https://mailchimp.com/resources/avoid-spam-filters/), which I encourage reading.

---

Finally, if you're looking for design ideas, [Really Good Emails](https://reallygoodemails.com/) is an excellent source of inspiration. :)