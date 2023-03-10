/**
 * This file contains functions which generate email templates for all emails
 * sending from this site
 */

/** Helps configuration of the parameter for GenerateCommon.mainContent */
class MainContentParam {
  paddingTop: string | undefined;
  paddingBottom: string | undefined;
  fontSize: string | undefined;
  paddingLR: string | undefined;

  constructor(
    public type: 'title' | 'body' | 'custom',
    public text: string,
    { paddingTop = '', paddingBottom = '', fontSize = '', paddingLR = '' }
  ) {
    if (paddingTop) this.paddingTop = paddingTop;
    if (paddingBottom) this.paddingBottom = paddingBottom;
    if (fontSize) this.fontSize = fontSize;
    if (paddingLR) this.paddingLR = paddingLR;
  }
}

/** Generate common content for emails */
const GenerateCommon = {
  preContent:
    () => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>External Feedback Source Email</title> <!--[if (mso 16)]><style type="text/css">a {text-decoration: none;}</style><![endif]--> <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> <!--<![endif]--><style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }#outlook a {	padding:0;}.ExternalClass {	width:100%;}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {	line-height:100%;}.es-button {	mso-style-priority:100!important;	text-decoration:none!important;}a[x-apple-data-detectors] {	color:inherit!important;	text-decoration:none!important;	font-size:inherit!important;	font-family:inherit!important;	font-weight:inherit!important;	line-height:inherit!important;}.es-desk-hidden {	display:none;	float:left;	overflow:hidden;	width:0;	max-height:0;	line-height:0;	mso-hide:all;}</style></head><body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"><div class="es-wrapper-color" style="background-color:#F4F4F4;"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f4f4f4"></v:fill> </v:background><![endif]-->
	<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">
	<tr style="border-collapse:collapse;"><td valign="top" style="padding:0;Margin:0;">`,
  postContent: () => '</td></tr></table></div></body></html>',
  header: () =>
    '<table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top;"><tr style="border-collapse:collapse;"><td align="center" bgcolor="#019cbb" style="padding:0;Margin:0;background-color:#019CBB;"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"><tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="600" valign="top" align="center" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff;"><tr style="border-collapse:collapse;"><td style="Margin:0;padding-left:10px;padding-right:10px;padding-top:25px;padding-bottom:25px;" align="right"><span style="font-family:Roboto;font-size:20px;padding-right:8px;">Jake Johnson</span><a href="https://www.jakejohnson.pro" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, \'helvetica neue\', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#111111;"><img src="cid:jakelogo" alt style="display:inline-block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="85"></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table>',
  title: (text: string) =>
    `<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"><tr style="border-collapse:collapse;"><td style="padding:0;Margin:0;background-color:#019CBB;" bgcolor="#019cbb" align="center"><table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" align="center"><tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="600" valign="top" align="center" style="padding:0;Margin:0;"><table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff"><tr style="border-collapse:collapse;"><td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px;"><h1 style="Margin:0;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#111111;">${text}</h1></td></tr><!-- Removes bottom radius title --><tr style="border-collapse:collapse;"><td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;"><table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td style="padding:0;Margin:0px;border-bottom:1px solid #FFFFFF;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table>`,
  mainContent: (content: MainContentParam[]) =>
    `<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"><tr style="border-collapse:collapse;"><td align="center" style="padding:0;Margin:0;"><table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" align="center"><tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="600" valign="top" align="center" style="padding:0;Margin:0;"><table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">${content.reduce(
      (
        fullText,
        {
          text,
          type,
          paddingTop = '10',
          paddingBottom = '10',
          fontSize = '18',
          paddingLR = '30',
        }
      ) =>
        fullText +
        (type == 'custom'
          ? text
          : `<tr style="border-collapse:collapse;"><td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:${paddingTop}px;padding-bottom:${
              type == 'title' ? '0' : paddingBottom
            }px;padding-left:${paddingLR}px;padding-right:${paddingLR}px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:${
              type == 'title' ? '20' : fontSize
            }px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#${
              type == 'title' ? '111111' : '666666'
            };white-space:pre-wrap;">${
              type == 'title'
                ? '<span style="color:#019cbb;font-size:24px;">|</span> '
                : ''
            }${text}</p></td></tr>`),
      ''
    )}</table></td></tr></table></td></tr></table></td></tr></table>`,
  seperationFromMainContent: () =>
    '<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"><tr style="border-collapse:collapse;"><td align="center" style="padding:0;Margin:0;"><table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" align="center"><tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="600" valign="top" align="center" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;"><table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td style="padding:0;Margin:0px;border-bottom:1px solid #F4F4F4;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table>',
  footer: (content: { text: string; link?: string }[]) =>
    `<table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"><tr style="border-collapse:collapse;"><td align="center" style="padding:0;Margin:0;"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"><tr style="border-collapse:collapse;"><td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="540" valign="top" align="center" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">${content.reduce(
      (fullText, { text, link }) =>
        fullText +
        `<tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;padding-top:0px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666;">${
          link
            ? `<a href="${link} target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#666666;">${text}</a>`
            : text
        }</p></td></tr>`,
      ''
    )}</table></td></tr></table></td></tr></table></td></tr></table>`,
  // helpInfo: () => `<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"><tr style="border-collapse:collapse;"><td align="center" style="padding:0;Margin:0;"><table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" align="center"><tr style="border-collapse:collapse;"><td align="left" style="padding:0;Margin:0;"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"><tr style="border-collapse:collapse;"><td width="600" valign="top" align="center" style="padding:0;Margin:0;"><table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFECD1;border-radius:4px;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffecd1"><tr style="border-collapse:collapse;"><td align="center" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:30px;padding-right:30px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111;">Need more help?</h3><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111;">info@1080sweep.com</h3></td></tr></table></td></tr></table></td></tr></table></td></tr></table>`,
  /** To be used with the GenerateCommon.mainContent as type: 'custom' */
  buttonLink: (text: string, link: string) =>
    `<tr style="border-collapse:collapse;"><td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:24px;padding-bottom:24px;"><span class="es-button-border" style="border-style:solid;border-color:#FFA73B;background:#019CBB;border-width:1px;display:inline-block;border-radius:2px;width:auto;"><a href="${link}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#019CBB;border-width:10px 20px;display:inline-block;background:#019CBB;border-radius:2px;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;">${text}</a></span></td></tr>`,
  /** Easily Compiles data with functions from this object */
  quickBuild: ({ title = '404', content = <MainContentParam[]>[] }) =>
    GenerateCommon.preContent() +
    GenerateCommon.header() +
    GenerateCommon.title(title) +
    GenerateCommon.mainContent(content) +
    GenerateCommon.seperationFromMainContent() +
    GenerateCommon.postContent(),
};

/** Get the template for a inquiry submission email */
export const generateInquiryPost = ({
  name = '404',
  message = '404',
  email = '404',
  website = '404',
}) =>
  GenerateCommon.quickBuild({
    title: 'Contact from your website',
    content: [
      new MainContentParam('title', 'Name', {}),
      new MainContentParam('body', name, {}),
      new MainContentParam('title', 'Email', {}),
      new MainContentParam('body', email, {}),
      new MainContentParam('title', 'Website', {}),
      new MainContentParam('body', website, {}),
      new MainContentParam('title', 'Message', {}),
      new MainContentParam('body', message, {}),
      new MainContentParam(
        'custom',
        GenerateCommon.buttonLink('Reply', `mailto:${email}`),
        {}
      ),
    ],
  });
