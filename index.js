var EC = require("elliptic").ec;

// Create and initialize EC context
// (better do it once and reuse it)
var ec = new EC("secp256k1");

// Generate keys
var key = ec.genKeyPair();

var priv_key = key.getPrivate('hex');
console.log("Private Key: ", priv_key);

var pub = key.getPublic(false).encode("hex");
var pubCompact = key.getPublic(true).encode("hex");
console.log("Public Key: ", pub);
console.log("Public Key Compact: ", pubCompact);
