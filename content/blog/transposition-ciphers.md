---
title: "Transposition Ciphers"
date: 2025-04-22T00:00:00Z
draft: false
description: ""
blog_tags: ["cryptography", "cipher", "university"]
---

During my university studies, We delved into the fascinating world of cryptography. One of the interesting topics we covered was the **Transposition Cipher**. This cipher is a method of encryption where the positions of the characters in the plaintext are shifted according to a regular system to form the ciphertext.

## Encoding

To encode a message, lets say "**HELLO WORLD**", with the key "**PASS**", we first create a grid based on the length of the key. The plaintext is written in rows, and then we read it out column by column according to the order of the letters in the key. I will represent spaces as dots for clarity.

|P|A|S|S|
|:-:|:-:|:-:|:-:|
|H|E|L|L|
|O|.|W|O|
|R|L|D|.|

Then we sort the key alphabetically, which gives us the order of the columns to read. The sorted key is "**APSS**", which corresponds to the column order **2, 1, 3, 4**. We then change the order of the columns in the grid to match this order. (Note: since we have two S's, I will keep the order of the original columns for the S's)

|A|P|S|S|
|:-:|:-:|:-:|:-:|
|E|H|L|L|
|.|O|W|O|
|L|R|D|.|

Now we read the columns in the order of the sorted key, giving us "**E** **LHORLWDLO** " (note the space at the end). This is our ciphertext.

## Decoding

Now, to decode the message, we need to reverse the process. We first create a grid, sorting the key alphabetically and filling in the columns according to the order of the letters in the key. Then we read the grid row by row to get back the original message.

|P|A|S|S|
|:-:|:-:|:-:|:-:|
|H|E|L|L|
|O|.|W|O|
|R|L|D|.|

Now we read the grid row by row to get back the original message. The result is "**HELLO** **WORLD** " (note the space at the end, because we pad the grid since the message does not fill the grid).

## One more thing...

Now, for a programmer, there isn't much I get from just knowing how to encode and decode a message using the transposition cipher. So, I decided to implement this in JavaScript (since this is a website lol).

### Encoder

{{< encode-transposition-ciphers >}}

### Decoder

{{< decode-transposition-ciphers >}}
