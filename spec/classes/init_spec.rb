require 'spec_helper'
describe 'home_of_the_gooners' do

  context 'with defaults for all parameters' do
    it { should contain_class('home_of_the_gooners') }
  end
end
