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
    @destinations << location.name
  end

  def travel_log
    p "Began Trip."
    @destinations.each_cons(2) do |destination|
      # p destination
      p "Travelled from #{destination.first} to #{destination.last}."
    end
    p "Ended Trip."
  end
end

toronto = Location.new("Toronto")
ottawa = Location.new("Ottawa")
montreal = Location.new("Montreal")
quebec_city = Location.new("Quebec City")
halifax = Location.new("Halifax")
st_johns = Location.new("St. John's")

trip = Trip.new
trip.add_location(toronto)
trip.add_location(ottawa)
trip.add_location(montreal)
trip.add_location(quebec_city)
trip.add_location(halifax)
trip.add_location(st_johns)

trip.travel_log