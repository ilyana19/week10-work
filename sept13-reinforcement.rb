class Location
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

class Trip
  def initialize
    @destinations = []
  end

  def add_location(location)
    @destinations << location
  end
end

p toronto = Location.new("Toronto")

trip = Trip.new

trip.add_location(toronto)
p trip