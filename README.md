# pastedrop

**This is a work in progress and the README file will be updated, please don't
use this**

pastedrop is an app to share your clipboard data between devices fast and
secure.  In order to be secure we are relaying on the [Signal protocol][0] for all
the clipboard data in the app. 

A example use case is: You have two devices (desktop and phone). Both of them
are running the app. Let's say you decide to copy something on the desktop and
then pick the phone as a target device. pastedrop will then update the system
clipboard on the target device. So when you decide to paste on the phone, the
data from the desktop is pasted.

## Why

As far as we know, no project is remotely updating the system clipboard.  We
also wanted to scratch an itch and finally play with the signal protocol using
end-to-end encrypted.

## Design

TODO: fill this out

[0]: https://signal.org/docs/
