    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Ownglyph/raw/main';
      var specificPaths = {
        '낼나_예샘체': 'STANDARD/낼나_예샘체.zip',
        '온글잎_23송정여중수민체': 'STANDARD/온글잎_23송정여중수민체.zip',
        '온글잎_30썸띵갤': 'STANDARD/온글잎_30썸띵갤.zip',
        // 'font2': 'AnotherFolder/another_font.zip',
        // 필요에 따라 링크 추가
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }