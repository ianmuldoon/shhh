
$('#secretSender').on('submit',function(event){event.preventDefault();blockUI();$.ajax({url:'/api/send',data:$('#secretSender').serialize(),type:'POST',complete:function(data){alert(data);$unblockUI();}});});