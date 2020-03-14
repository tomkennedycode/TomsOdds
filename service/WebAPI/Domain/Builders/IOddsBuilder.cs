using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Domain.Models;

namespace WebAPI.Domain.Builders
{
    public interface IOddsBuilder
    {
        Task<List<OddsAPIData>> GetFullOdds();
    }
}