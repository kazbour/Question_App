class Api::QuestionsController < ApplicationController

  def index
    respond_with Question.all
  end

  def create
    q = Question.create(post_params)
    render json: q
  end

  def show
    respond_with Question.find(params[:id])
  end

  def destroy
    
  end

  # def upvote
  #   question = Question.find(params[:id])
  #   question.increment!(:upvotes)

  #   respond_with question
  # end

  private
  def post_params
    params.require(:question).permit(:content)
  end
end