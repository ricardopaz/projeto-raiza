<?php


class ErrorHandler {
  public function setError(string $error) {
    // Creating the cookie
    setcookie("error", $error, time() + 60, "/");
  }

  public function setSuccess(string $success) {
    setcookie("success", $success, time() + 60, "/");
  }
}