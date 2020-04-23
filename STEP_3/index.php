<!DOCTYPE html>
<html lang="it" dir="ltr">
    <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" charset="utf-8"></script>
        <link rel="stylesheet" href="css/style.css">
        <title>Advance Charts Step_3</title>
    </head>
    <body>
        <?php $level= $_GET['level']; ?>
        <div class="main-container">
                <canvas id="line-chart"></canvas>

                <canvas id="pie-chart"></canvas>

                <canvas id="team-chart"></canvas>
        </div>

        <!-- per risolvere ho creato tre scrip.js che vengono attivati a seconda del $_GET -->
        <?php if ($level == 'guest') { ?>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>;
            <script src="js/script.js" charset="utf-8"></script>;
        <?php } elseif ($level == 'employee') { ?>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>;
            <script src="js/script2.js" charset="utf-8"></script>;
        <?php } elseif ($level == 'clevel') {  ?>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>;
            <script src="js/script3.js" charset="utf-8"></script>;
        <?php } ?>




    </body>
</html>
