<?php
include 'db.php';

// Liczba odwiedzin
$totalVisits = $db->query("SELECT COUNT(*) FROM visits")->fetchColumn();

// Ostatnie 10 odwiedzin
$recentVisits = $db->query("SELECT * FROM visits ORDER BY entry_time DESC LIMIT 10")->fetchAll(PDO::FETCH_ASSOC);

// Dane heatmapy dla strony głównej
$clicks = $db->query("SELECT x, y FROM clicks WHERE page='/'")->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Panel Analityki</title>
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/heatmap.js"></script>
</head>
<body>
<div class="container">
    <h1>Panel Analityki</h1>

    <div class="cards">
        <div class="card">
            <h2>Łączna liczba odwiedzin</h2>
            <p><?= $totalVisits ?></p>
        </div>
    </div>

    <h2>Ostatnie odwiedziny</h2>
    <div class="table-wrapper">
        <table class="analytics-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>IP</th>
                    <th>Strona</th>
                    <th>Referrer</th>
                    <th>Czas sesji (s)</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
            <?php foreach($recentVisits as $v): ?>
                <tr>
                    <td><?= $v['id'] ?></td>
                    <td><?= $v['ip'] ?></td>
                    <td><?= $v['page'] ?></td>
                    <td><?= $v['referrer'] ?></td>
                    <td><?= $v['session_duration'] ?></td>
                    <td><?= $v['entry_time'] ?></td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <h2>Heatmapa kliknięć</h2>
    <canvas id="heatmapCanvas" width="800" height="600"></canvas>
</div>

<script>
const clicks = <?= json_encode($clicks) ?>;
const canvas = document.getElementById('heatmapCanvas');
const ctx = canvas.getContext('2d');

clicks.forEach(c => {
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.beginPath();
    ctx.arc(c.x, c.y, 10, 0, Math.PI*2);
    ctx.fill();
});
</script>
</body>
</html>
