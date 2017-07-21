
function resthen(res, cb) {
  if (res.then) {
    return res.then(res => resthen(res, cb))
      .catch(cb);
  }
  return cb(null, res);
}

module.exports = resthen;
