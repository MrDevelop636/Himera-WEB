<?php
class EnvLoader
{
    private string $filePath;

    public function __construct(string $filePath)
    {
        if (!file_exists($filePath)) {
            throw new \Exception("Plik .env nie istnieje: {$filePath}");
        }
        $this->filePath = $filePath;
    }

    public function load(): void
    {
        $lines = file($this->filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

        foreach ($lines as $line) {
            // Pomijamy komentarze
            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            // Rozdzielamy klucz i wartość
            [$key, $value] = array_map('trim', explode('=', $line, 2));

            // Usuwamy ewentualne cudzysłowy
            $value = trim($value, "\"'");

            // Zapisujemy do środowiska
            putenv("{$key}={$value}");
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }

    public function get(string $key, mixed $default = null): mixed
    {
        return $_ENV[$key] ?? $_SERVER[$key] ?? getenv($key) ?: $default;
    }
}
