function skillsMember()
{
	return {
		restrict:'E',
		controller:skillsMemberController,
	        controllerAs: 'vm',
               scope{
		member:'='
	       } 
	};
}
