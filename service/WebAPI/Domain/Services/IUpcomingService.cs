using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Domain.Models;

namespace WebAPI.Domain.Services
{
    public interface IUpcomingService
    {
        List<Upcoming> GetUpcomingMatches(List<OddsAPIData> data);
    }
}