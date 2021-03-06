class PhotostoryController < ApplicationController
	before_action :authenticate_user!
	
	def index
		@stories =  Story.where(user_id: current_user)

		respond_to do |format|
			format.html
			format.json {render :json => @stories}
		end	
	end

	def new
		@story = Story.new
	end	

	def create
		@story = Story.new
		@story.name = params['photoStory']['name']
		@story.photoone = params['photoStory']['fileImage']
		@story.phototwo = params['photoStory']['apiImage']
		@story.location = params['photoStory']['address']
		@story.user_id = current_user.id if current_user

		respond_to do |format|
			if @story.save
				format.json { render json: @story, status: :created }
			else
				format.json { render json: @story.errors, status: :unprocessable_entity }
			end		
		end
	end
		
	def destroy
		@story = Story.find(params['id'])
    @story.destroy
    
    respond_to do |format|
      format.json { head :no_content }
      format.js   { render :layout => false }
    end
	end	

	private
	def story_params
		params.require(:story).permit(:name, :photoone, :phototwo, :user_id, :location)
	end	
end
