<?php
// Include autoloader 
require_once 'dompdf/autoload.inc.php'; 
require_once 'phpMailer/Exception.php'; 
require_once 'phpMailer/PHPMailer.php'; 
require_once 'phpMailer/SMTP.php'; 
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
// Reference the Dompdf namespace 
use Dompdf\Dompdf; 
use Dompdf\Options;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Instantiate and use the dompdf class 
$options = new Options();
$options->set('isRemoteEnabled', true);
$dompdf = new Dompdf($options);
ob_start();

include('pdf-template.php');

$file_content = ob_get_contents();

ob_end_clean ();
$dompdf->loadHtml($file_content); 

// (Optional) Setup the paper size and orientation 
// $dompdf->setPaper('A4', 'landscape'); 
 
// Render the HTML as PDF 
$dompdf->render();
$output = $dompdf->output();

// Output the generated PDF (1 = download and 0 = preview) 
$file_name = generateRandomString(50).'_full_report.pdf';
file_put_contents('pdf-files/'.$file_name, $output);

$smtpUsername = 'hello@wasteless.co'; //add server mail address here
$smtpPassword = 'hellooded'; //add server mail address password here
$emailFrom = 'hello@wasteless.com'; //from address
$emailFromName= 'Wasteless Team'; //from name
$emailTo = $_POST['te_email'];
$emailToName = $_POST['te_name'];
$emailToCompany = $_POST['te_company'];
$emailSubject = "Wasteless Impact Report for: ".$emailToCompany;
$phpmailer = new PHPMailer();
$phpmailer->isSMTP();
$phpmailer->Host = 'smtp.gmail.com'; //'smtp.mailtrap.io';
$phpmailer->SMTPSecure = 'ssl';
$phpmailer->SMTPAuth = true;
$phpmailer->Port = 465;//server mail port
$phpmailer->Username = $smtpUsername; //mail server credentials add here
$phpmailer->Password = $smtpPassword; //mail server credentials add here
$phpmailer->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$phpmailer->setFrom($emailFrom, $emailFromName);
$phpmailer->addAddress($emailTo, $emailToName);
$phpmailer->Subject = $emailSubject;
$phpmailer->AddAttachment('pdf-files/'.$file_name, 'report.pdf');
//$phpmailer->AddCC('hello@wasteless.com');
$phpmailer->msgHTML('
<p>
Thank you for your interest in improving your top line revenues and margins, by preventing shrinkage in your fresh category and reducing your environmental footprint with Wasteless STORE solution.<br><br>
Attached you will find the full report that shows how '.$_POST['te_company'].' and reduce waste by $'.$_POST['wasteReductionValue'].', <br><br>
Please, reach us directly if you have any questions or if you are interested in proving the value of STORE. We can get it up and running in your stores within hours, with literally zero IT integration.<br><br>
All the best,<br><br>
The Wasteless Team

</p>
'); //$phpmailer->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
$phpmailer->AltBody = '
<p>
Thank you for your interest in improving your top line revenues and margins, by preventing shrinkage in your fresh category and reducing your environmental footprint with Wasteless’ STORE solution.<br>
Attached you will find the full report that shows how '.$_POST['te_company'].' and reduce waste by $'.$_POST['wasteReductionValue'].', <br>
Please, reach us directly if you have any questions or if you are interested in proving the value of STORE. We can get it up and running in your stores within hours, with literally zero IT integration.<br>
All the best,
The Wasteless Team

</p>
';
// $phpmailer->addAttachment('images/phpmailer_mini.png'); //Attach an image file

if(!$phpmailer->send()){
    echo "Mailer Error: " . $phpmailer->ErrorInfo;
}else{
    echo json_encode(['status'=>true]);
}


?>