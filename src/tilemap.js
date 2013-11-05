define('tilemap', function() {
  var TileMap;
  return TileMap = (function() {
    function TileMap(width, height) {
      var x, y, _base, _i, _j, _ref, _ref1, _ref2, _ref3;
      this.width = width != null ? width : {
        min: 0,
        max: 4
      };
      this.height = height != null ? height : {
        min: 0,
        max: 4
      };
      this.tile = [];
      for (x = _i = _ref = this.width.min, _ref1 = this.width.max - 1; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; x = _ref <= _ref1 ? ++_i : --_i) {
        for (y = _j = _ref2 = this.height.min, _ref3 = this.height.max - 1; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; y = _ref2 <= _ref3 ? ++_j : --_j) {
          (_base = this.tile)[x] || (_base[x] = []);
          this.tile[x].push(TileMap.defaultType);
        }
      }
    }

    TileMap.defaultType = 'empty';

    TileMap.prototype.flatten = function(options) {
      var flatArray, i, j, x, y, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1;
      flatArray = [];
      if (options != null ? options.returnAsObject : void 0) {
        _ref = this.tile;
        for (x = _i = 0, _len = _ref.length; _i < _len; x = ++_i) {
          i = _ref[x];
          for (y = _j = 0, _len1 = i.length; _j < _len1; y = ++_j) {
            j = i[y];
            flatArray.push({
              x: x,
              y: y,
              type: j
            });
          }
        }
      } else {
        _ref1 = this.tile;
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
          i = _ref1[_k];
          for (_l = 0, _len3 = i.length; _l < _len3; _l++) {
            j = i[_l];
            flatArray.push(j);
          }
        }
      }
      return flatArray;
    };

    return TileMap;

  })();
});