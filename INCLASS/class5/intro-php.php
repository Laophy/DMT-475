<html>
    <head>
    <title>PHP Test</title>
    </head>

    <body>
    <h1>What is your favorite movie?</h1>

    <?php 
        $stop1 = 408;
        $stop2 = 277;
        $stop3 = 423;
        $gas = 3.19;
        $mpg = 25;

        // 
        $distance_traveled = $stop1 + $stop2 + $stop3;

        $cost = $distance_traveled * $gas / $mpg;

        echo "<h2>Details of my Trip</h2>";

        echo "<p>The total distance of my trip is $distance_traveled</p>";

        echo "<p>The cost of gas for my trip will be $" . number_format($cost, 2) . "</p>";

        echo "<p>The cost of gas for my trip will be $" . (($stop1 + $stop2 + $stop3) * $gas / $mpg) . "</p>";
    ?>
    </body>
</html>