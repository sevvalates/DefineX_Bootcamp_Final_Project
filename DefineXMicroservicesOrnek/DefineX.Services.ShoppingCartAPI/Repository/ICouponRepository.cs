﻿using DefineX.Services.ShoppingCartAPI.Models.dto;

namespace DefineX.Services.ShoppingCartAPI.Repository
{
    public interface ICouponRepository
    {
        Task<CouponDto> GetCoupon(string couponName);
    }
}
