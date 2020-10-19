    <?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail ->CharSet = 'UTF-8';
    $mail ->setLanguage('ru', 'phpmailer/language/');
    $mail ->IsHTML(true);

    // от кого письмо

    $mail->setFrom('info@guru', 'Name');

    // кому отправить, можно указывать несколько адресатов

    $mail->addAddress('code@mail.ru');

    // тема письма

    $mail->Subject = 'Hello! You are approaching our company!';

    // рука - обработчик формы

    $hand = 'Правая';
    if($_POST['hand'] == 'left'){
        $hand = 'Левая';
    }

    // тело письма
    $body = '<h1> Вам новое письмо с сайта </h1>';

    if(trim(!empty($_POST['name']))){
        $body.= '<p><strong>Name:</strong>'.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body.= '<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
    }

    if(trim(!empty($_POST['hand']))){
        $body.= '<p><strong>Hand:</strong>'.$hand.'</p>';
    }

    if(trim(!empty($_POST['age']))){
        $body.= '<p><strong>Age:</strong>'.$_POST['age'].'</p>';
    }

    if(trim(!empty($_POST['message']))){
        $body.= '<p><strong>Message:</strong>'.$_POST['message'].'</p>';
    }

    //    копирование на сервер прикрепленные файлы

    if (!empty($_FILES['image']['tmp.name'])){

//        путь загрузки файла
        $filePath = _DIR_.'/files/'.$_FILES['image'][name];

//        загрузка файла

        if (copy($_FILES['image']['tmp_name'], $filePath)){
            $fileAttach = $filePath;
            $body.='<p><strong>Photo in the attachment</strong></p>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

//    отправляем

    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Your data has been sent';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);





























