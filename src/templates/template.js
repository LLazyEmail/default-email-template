export default `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- normalize.css contents must be inlined to newsletter -->
    <link href="normalize.css" rel="stylesheet">
    <link href="extra.css" rel="stylesheet">
    <style>
        /* Put extra.css contents here */
    </style>
    <!--[if (gte mso 9)|(IE)]>
        <link href="outlook.css" rel="stylesheet">
        /* Put outlook.css contents here */
    <![endif]-->
    <!-- Left title element empty to prevent viewing this text in subject line on Android 4 email clients -->
    <title></title>
</head>

<body class="body">
    <div class="webkit">
        <!-- An example of bulletproof container with limited row length -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <!-- Add here this element -->
                <!-- <th></th> -->
                <!-- to align container to center -->
                <th width="500" align="left">
                    <p>You are receiving this because a known security researcher submitted proof of finding credentials for your npm user account on the internet.</p>

                    <p>In order to prevent unauthorized access, we've changed the password to your account and invalidated all of your active npm tokens.</p>

                    <p>Please click on the following link, or paste this into your browser to reset your password:</p>

                    <ul>
                        <li><a href="https://www.npmjs.com/forgot">https://www.npmjs.com/forgot</a></li>
                    </ul>

                    <p>When you reset your password please do not set it back to the old value.</p>

                    <p>We have no reason to believe that your account was compromised, but cannot be certain of this. This reset is preemptive, to prevent future compromise.</p>

                    <p>If you have questions:</p>
                    <ol>
                        <li>You can reply to this message or email <a href="support@npmjs.com">support@npmjs.com</a>.</li>
                        <li>You can also read more about this undertaking in&nbsp;our&nbsp;<a href="http://blog.npmjs.org/post/161515829950/credentials-resets">blog&nbsp;post</a>.</li>
                    </ol>

                    <p>Npm loves you.</p>
                </th>
                <th></th>
            </tr>
        </table>
    </div>
</body>

</html>`;
