var compositeRequest = function() {
  pingWaterDetector()
  pingFireDetector()
  pingLightDetector()
  pingTandH()
}

setInterval(compositeRequest, 3000)
