using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Domain.Types
{
    public class ServiceResponse<TResult>
    {
        private Dictionary<string, List<string>> _errors;

        public bool IsValid => !_errors.Any();

        public Dictionary<string, List<string>> Errors => _errors;

        public TResult Result { get; set; }

        public ServiceResponse()
        {
            _errors = new ();
        }

        public void AddError(string key, string errorMessage)
        {
            if (!_errors.ContainsKey(key))
            {
                _errors[key] = new ();
            }

            _errors[key].Add(errorMessage);
        }
    }
}
