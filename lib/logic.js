/**
 * healthrecords script
 */


/**
     * Update Medication
     * @param {com.healthnet.updateMedication} updateMedication - the updateMedication transaction
     * @transaction
     */
    function updateMedication(updateMedication){
        console.log('update medication');
      
        var id = updateMedication.patientInfo.patientID;
        return getAssetRegistry('com.healthnet.PatientInfo')
          .then(function(ar) {
            return ar.get(id).then(function(info){
              info.medications = updateMedication.medications;
              return ar.update(info);
          })
        })
      }
      
      /**
           * Update Past Visits
           * @param {com.healthnet.updatePastVisits} updatePastVisits - the updatePastVisits transaction
           * @transaction
           */
      function updatePastVisits(updatePastVisits){
        console.log('update past visits');
        var id = updatePastVisits.patientInfo.patientID;
        return getAssetRegistry('com.healthnet.PatientInfo')
          .then(function(ar) {
            return ar.get(id).then(function(info){
              info.pastVisits.push(updatePastVisits.newVisit);
              return ar.update(info);
          })
        })
      }
      
       /**
           * Update Problems
           * @param {com.healthnet.updateProblems} updateProblems - the updatePastVisits transaction
           * @transaction
           */
      function updateProblems(updateProblems){
        console.log('update past visits');
        var id = updateProblems.patientInfo.patientID;
        return getAssetRegistry('com.healthnet.PatientInfo')
          .then(function(ar) {
            return ar.get(id).then(function(info){
              info.problems = updateProblems.problems;
              return ar.update(info);
          })
        })
      }