<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;

class BackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $database = env('DB_DATABASE');
        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $host = env('DB_HOST');
        $backupPath = storage_path('app/backups');
        $timestamp = Carbon::now()->format('Y-m-d_H-i-s');
        $filename = "$backupPath/backup_$timestamp.sql";

        if (! file_exists($backupPath)) {
            mkdir($backupPath, 0755, true);
        }

        $command = sprintf(
            'mysqldump -u %s -p%s -h %s %s > %s',
            escapeshellarg($username),
            escapeshellarg($password),
            escapeshellarg($host),
            escapeshellarg($database),
            escapeshellarg($filename)
        );

        $result = null;
        $output = null;
        exec($command, $output, $result);

        if ($result == 0) {
            $this->info('Backup was successful!');
        } else {
            $this->error('Backup failed.');
        }
    }
}
