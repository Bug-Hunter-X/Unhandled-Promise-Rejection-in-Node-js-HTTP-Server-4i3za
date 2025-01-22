# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js server-side code: unhandled promise rejections in asynchronous operations.  When an asynchronous operation (like a database query or external API call) fails, the server doesn't gracefully handle the error, leading to unresponsive clients.

## The Problem

The `bug.js` file shows a simple HTTP server with an asynchronous operation (`doSomethingAsync`). If this operation fails, the error is logged to the console, but no response is sent to the client. This leaves the client hanging indefinitely.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle such errors.  It uses a `.catch()` block to handle potential rejections, sending a proper error response to the client in case of failure.  This ensures a better user experience and prevents server hangs.