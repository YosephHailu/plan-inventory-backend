<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use App\Models\UnitOfMeasurement;

final class MeasurementUnitMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function delete($rootValue, array $args)
    {
        $measurementUnit = UnitOfMeasurement::find($args['id']);

        if($measurementUnit->items()->exists()) {
            throw new ValidationException([
               '404' => __('Related resource exists!'),
           ], __('Related resource exists'));
        } else {
            $measurementUnit->delete();
        }

        return $measurementUnit;
    }
}
