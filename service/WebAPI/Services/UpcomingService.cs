using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Domain.Models;
using WebAPI.Domain.Services;
using WebAPI.Domain.Utility;

namespace WebAPI.Services
{
    public class UpcomingService : IUpcomingService
    {
        public List<Upcoming> GetUpcomingMatches(List<OddsAPIData> data)
        {
            List<Upcoming> upcomingMatches = new List<Upcoming>();

            foreach (var obj in data){
                var addToList = new Upcoming();
                    addToList.HomeTeam = obj.home_team;
                    string[] teams = new string[2] {
                        obj.teams[0],
                        obj.teams[1]
                    };

                    int homeTeamIndex = Array.IndexOf(teams, addToList.HomeTeam);
                    int awayTeamIndex =(homeTeamIndex == 1) ? 0 : 1;

                    addToList.AwayTeam = teams[awayTeamIndex];
                    addToList.MatchDate = Utilities.ConvertUnixTimeStamp(obj.commence_time);

                    addToList.League = obj.sport_nice;

                    upcomingMatches.Add(addToList);
            }

            return upcomingMatches;
        }
    }
}