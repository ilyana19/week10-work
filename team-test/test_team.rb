require 'minitest/autorun'
require 'minitest/pride'
require './team.rb'

class TestTeam < MiniTest::Test
  def setup
    @team = Team.new("Crimson Mercenaries", 10, ["Yue", "Rowan", "Aethil", "Prim", "Drifting Cloud", "Pokeyman"])
  end

  def test_to_hash
    expected = {team_name: "Crimson Mercenaries", level: 10, points: 0}
    actual = @team.to_hash
    assert_equal(expected, actual)
  end
end